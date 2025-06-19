<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function createAdmin(Request $request){
        $adminData = $request->validate([
            'fullname' => 'required|regex:/^[A-Za-z]+(?:[\s\-][A-Za-z]+)*$/',
            'username' => 'required|unique:admins,username',
            'password' => 'required|min:8|max:12',
        ]);

        $admin = Admin::create([
            'fullname' => $adminData['fullname'],
            'username' => $adminData['username'],
            'password' => Hash::make($adminData['password']),
        ]);

        return response()->json([
            'admin' => $admin,
        ]);

    }

    public function adminLogin(Request $request){
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $admin = Admin::where('username', $credentials['username'])->first();

        if(!$admin || !Hash::check($credentials['password'], $admin->password)){
             return response()->json([
            'message' => 'Invalid username or password'
            ], 401);
        }
        
        $token = $admin->createToken('admin-token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'admin' => $admin,
            'token' => $token,
        ]);
    }

    public function adminLogout(Request $request){
         // Revoke the token that was used to authenticate the current request
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}