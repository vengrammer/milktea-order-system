<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'milktea_id',
        'size',
        'quantity',
        'phone_number',
        'total_price',
        'status',
    ];

    public function users(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function milkteas(): BelongsTo{
        return $this->belongsTo(Milktea::class);
    }
}
