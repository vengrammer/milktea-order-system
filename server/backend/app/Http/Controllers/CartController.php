<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function show(Request $request)
    {
        $cart = Cart::with('milktea')->where('user_id', $request->user_id)->get();

        return response()->json([
            'cart' => $cart,
        ]);
    }

    public function deleteCart(Request $request)
    {
        $cart = Cart::findOrFail($request->id);
        $cart->delete();
        return response()->json([
            'message' => 'Cart successfully deleted',
        ]);
    }
    public function addToCart(Request $request)
    {
        $cart_add = $request->validate([
            'user_id'     => 'required|exists:users,id',
            'milktea_id'  => 'required|exists:milkteas,id',
            'size'        => 'required|in:small,medium,large',
            'quantity'    => 'required|integer|min:1',
            'total_price' => 'required|numeric|min:0',
        ]);

        $cart = Cart::create([
           'user_id' => $cart_add['user_id'],
           'milktea_id' => $cart_add['milktea_id'],
           'size' => $cart_add['size'],
           'quantity' => $cart_add['quantity'],
           'total_price' => $cart_add['total_price'],
        ]);

        return response()->json([
            'message' => 'Cart successfully added',
            'cart' => $cart,
        ]);
    }

}
