<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function create(Request $request){
        $adminData = $request->validate([
            'fullname' => 'required|regex:/^[A-Za-z]+(?:[\s\-][A-Za-z]+)*$/',
            'username' => 'required|unique:admin,username',
            'password' => 'required|min:8|max:12',
        ]);

        $admin = Admin::create([
            'fullname' => $adminData['fullname'],
            'username' => $adminData['username'],
            'password' => Hash::make($adminData['password']),
        ]);

        $token = $admin->createToken('main')->plainTextToken;

        return response()->json([
            'admin' => $admin,
            'token' => $token,
        ]);

    }
}
