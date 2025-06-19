<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('milkteas', function (Blueprint $table) {
            $table->id();
            $table->string('flavor');
            $table->string('image');
            $table->integer('price_large');
            $table->integer('price_medium');
            $table->integer('price_small');
            $table->boolean('available')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('milkteas');
    }
};
