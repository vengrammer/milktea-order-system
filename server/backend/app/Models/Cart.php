<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'milktea_id',
        'size',
        'quantity',
        'total_price',
    ];

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function milktea(): BelongsTo{
        return $this->belongsTo(Milktea::class);
    }
}
