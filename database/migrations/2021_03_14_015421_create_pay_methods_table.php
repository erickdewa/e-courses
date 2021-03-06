<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayMethodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pay_methods', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();

            $table->string('nm_method');
            $table->string('nomor')->default('-');
            $table->string('image')->default('/img/method/default.png');
            $table->string('nm_account')->default('-');
            $table->enum('active', ['Y', 'N'])->default('N');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pay_methods');
    }
}
