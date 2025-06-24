<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function userSignup(Request $request){   
        $user_data = $request->validate([
        'name'         => 'required|regex:/^[A-Za-z]+(?:[\s\-][A-Za-z]+)*$/',
        'email'        => 'required|email|unique:users,email',
        'password'     => 'required|min:4|max:8',
        'address'      => 'required',
        'phone_number' => 'required|regex:/^[0-9]{10,11}$/',
        ]);

        $user = User::create([
            'name'         => $user_data['name'],
            'email'        => $user_data['email'],
            'password'     => Hash::make($user_data['password']),
            'address'      => $user_data['address'],
            'phone_number' => $user_data['phone_number'],
        ]);

        $token = $user->createToken('user-token')->plainTextToken;

        return response()->json([
            'message' => 'Successfuly Sign up',
            'user'    => $user,
            'token'   => $token,
        ],200);
    }

    public function userlogin(Request $request){
        $credentials = $request->validate([
            'email'     => 'required',
            'password'  => 'required',
        ]);

        $user = User::where('email', $credentials['email'])->first();

        if(!$user || !Hash::check($credentials['password'], $user->password )){
            return response()->json([
                'message' => 'Invalid username or password'
            ], 401);
        }

        $token = $user->createToken('user-token')->plainTextToken;

        return response()->json([
            'message' => 'Successfully login',
            'token'   => $token,
            'user'    => $user,
        ]);
    }

    public function userLogout(Request $request){
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}
