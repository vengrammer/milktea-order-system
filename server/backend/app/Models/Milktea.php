<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Milktea extends Model
{
    protected $fillable = [
        'flavor',
        'image',
        'price_large',
        'price_medium',
        'price_small',
        'available',

    ];
    
    public function carts(): HasMany{
        return $this->hasMany(Cart::class);
    }
}
