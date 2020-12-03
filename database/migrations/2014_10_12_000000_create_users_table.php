<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->uuid('uuid')->unique();

            $table->string('name')->default('User');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('confirm', ['No', 'Yes'])->default('No');

            $table->integer('level_id')->unsigned();
            $table->foreign('level_id')->references('id')->on('levels')
                  ->onDelete('restrict');

            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
