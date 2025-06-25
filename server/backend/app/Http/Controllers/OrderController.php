<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\History;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //show for admin
    public function showForAdmin()
    {
        $orders = Order::orderBy('created_at', 'desc')->get();

        return response()->json([
            'orders' => $orders,
        ]);
    }

    //approved order by admin
    public function approveOrder(Request $request)
    {
        $data = $request->validate([
            'id' => ['required', 'exists:orders,id'],
        ]);

        $order = Order::findOrFail($data['id']);

        if ($order->status !== 'pending') {
            return response()->json([
                'message' => 'Only pending orders can be approved.',
            ], 422);
        }

        $order->status = 'approved';
        $order->save();

        return response()->json([
            'message' => 'Order approved successfully.',
            'order'   => $order,
        ]);
    }
    //delivered order using admin
    public function deliverOrder(Request $request)
    {
        $data = $request->validate([
            'id' => ['required', 'exists:orders,id'],
        ]);

        $order = Order::with('milktea')->findOrFail($data['id']);

        if ($order->status !== 'approved') {
            return response()->json([
                'message' => 'Only approved orders can be marked delivered.',
            ], 422);
        }

        // 1. Update order status
        $order->status = 'delivered';
        $order->save();

        // 2. Record in history now that it's delivered
        History::create([
            'user_id'     => $order->user_id,
            'flavor'      => $order->milktea->flavor,
            'size'        => $order->size,
            'quantity'    => $order->quantity,
            'total_price' => $order->total_price,
            'status'      => 'delivered',
        ]);

        return response()->json([
            'message' => 'Order marked as delivered and recorded in history.',
            'order'   => $order,
        ]);
    }




    //show for user
    public function showForUser(Request $request){
        $orders = Order::with('user','milktea')
                ->where('user_id', $request->user_id)
                ->get();

        return response()->json([
            'orders' => $orders,
        ]);
    }

    //create order for user
    public function createUserOrder(Request $request){
        $order_data = $request->validate([
            'user_id' => 'required|exists:users,id',
            'milktea_id' => 'required|exists:milkteas,id',
            'size' => 'required|in:small,medium,large',
            'quantity' => 'required|integer|min:1',
            'address' => 'required|string|max:255',
            'phone_number' => 'required|digits:11',
            'total_price' => 'nullable|numeric|min:0|max:999999.99',
            'status' => 'pending',
        ]);

        $order = Order::create([
            'user_id' => $order_data['user_id'],
            'milktea_id' => $order_data['milktea_id'],
            'size' => $order_data['size'],
            'quantity' => $order_data['quantity'],
            'address' => $order_data['address'],
            'phone_number' => $order_data['phone_number'],
            'total_price' => $order_data['total_price'],
            'status' => $order_data['status'],
        ]);

        return response()->json([
            'message' => 'Order successfully created',
            'order'   => $order,
        ]);
    }

    //edit order for user
    public function editUserOrder(Request $request)
{
    $order_data = $request->validate([
        'id' => 'required|exists:orders,id', // Needed to find the order to edit
        'user_id' => 'required|exists:users,id',
        'milktea_id' => 'required|exists:milkteas,id',
        'size' => 'required|in:small,medium,large',
        'quantity' => 'required|integer|min:1',
        'address' => 'required|string|max:255',
        'phone_number' => 'required|digits:11',
        'total_price' => 'nullable|numeric|min:0|max:999999.99',
        'status' => 'pending',
    ]);

    $order = Order::findOrFail($order_data['id']);

    $order->update($order_data);

    return response()->json([
        'message' => 'Order successfully updated',
        'order'   => $order,
    ]);
}

}
