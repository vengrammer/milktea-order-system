<?php

namespace App\Http\Controllers;

use App\Models\History;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function show(Request $request){
        $user = $request->user();
        $history = History::with('user')
            ->where('user_id', $user->id)
            ->get();

        return response()->json([
            'history' => $history,
        ]);
    }

    public function deleteHistory(Request $request){
        $history = History::findOrFail($request->id);
        $history->delete();

        return response()->json([
            'message' => 'History succesfully deleted',
        ]);
    }

    public function addToHistory(Request $request){
        $history_data = $request->validate([
            'user_id'     => 'required|exist:users.id',
            'flavor'      => 'required|exists:milkteas,id',
            'size'        => 'required|in:small,medium,large',
            'quantity'    => 'required|integer|min:1',
            'total_price' => 'required|numeric|min:0',
            'status'      => 'required|in:canceled,declined,delivered',
        ]); 
        
        $history = History::create([
            'user_id' => $history_data['user_id'],
            'flavor'  => $history_data['flavor'],
            'size'    => $history_data['size'],
            'quantity'=> $history_data['quantity'],
            'total_price' => $history_data['total_price'],
            'status' => $history_data['status'],
        ]);

        
        return response()->json([
            'message' => 'History successfully added',
            'history' => $history,
        ]);
    }
}
