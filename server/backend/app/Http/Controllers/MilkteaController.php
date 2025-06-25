<?php

namespace App\Http\Controllers;

use App\Models\Milktea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class MilkteaController extends Controller
{
    public function show(){
        $milktea = Milktea::all();

        return response()->json([
            'milktea' => $milktea,
        ]);
    }

    public function createMilktea(Request $request){
        $milktea_data = $request->validate([
            'flavor' => 'required|string|max:255',
            'image'  => 'required|image|unique:milkteas,image|mimes:png,jpg,jpeg,gif|max:2048',
            'price_large' => 'required|integer|min:1|max:10000',
            'price_medium'  => 'required|integer|min:1|max:10000',
            'price_small' => 'required|integer|min:1|max:10000',
            'available' => 'required|boolean',
        ]);

        $milktea_image = $request->file('image')->store('milkteas', 'public');
        

        $milktea = Milktea::create([
            'flavor' => $milktea_data['flavor'],
            'image' => $milktea_image,
            'price_large' => $milktea_data['price_large'],
            'price_medium' => $milktea_data['price_medium'],
            'price_small' => $milktea_data['price_small'],
            'available' => $milktea_data['available'],
        ]);

        return response()->json([
            'message' => 'Milktea successfully created',
            'milktea' => $milktea,
        ]);
    }
    //EDIT MILKTEA
    public function editMilktea(Request $request)
    {
        $milktea = Milktea::findOrFail($request->id);

        $milktea_data = $request->validate([
            'flavor' => 'required|string|max:255',
            'image'  => 'nullable|image|mimes:png,jpg,jpeg,gif|max:2048',
            'price_large' => 'required|integer|min:1|max:10000',
            'price_medium'  => 'required|integer|min:1|max:10000',
            'price_small' => 'required|integer|min:1|max:10000',
            'available' => 'required|boolean',
        ]);

        // Handle image update
        if ($request->hasFile('image')) {
            // Delete the old image from storage
            if ($milktea->image && Storage::disk('public')->exists($milktea->image)) {
                Storage::disk('public')->delete($milktea->image);
            }

            // Upload the new image
            $milktea_image = $request->file('image')->store('milkteas', 'public');
            $milktea->image = $milktea_image;
        }

        // Update the other fields
        $milktea->flavor = $milktea_data['flavor'];
        $milktea->price_large = $milktea_data['price_large'];
        $milktea->price_medium = $milktea_data['price_medium'];
        $milktea->price_small = $milktea_data['price_small'];
        $milktea->available = $milktea_data['available'];
        $milktea->save();

        return response()->json([
            'message' => 'Milktea successfully updated',
            'milktea' => $milktea,
        ]);
    }


    public function deleteMilktea(Request $request)
    {
        $milktea = Milktea::findOrFail($request->id);

       
        if ($milktea->image && Storage::disk('public')->exists($milktea->image)) {
            Storage::disk('public')->delete($milktea->image);
        }

        $milktea->delete();

        return response()->json([
            'message' => 'Milktea successfully deleted'
        ]);
    }

}
