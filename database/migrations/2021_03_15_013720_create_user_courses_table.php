<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_courses', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();

            $table->unsignedBigInteger('courses_id');
            $table->foreign('courses_id')->references('id')->on('courses')
                  ->onDelete('cascade');

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')
                  ->onDelete('cascade');

            $table->unsignedBigInteger('method_id');
            $table->foreign('method_id')->references('id')->on('pay_methods')
                  ->onDelete('cascade');

            $table->integer('discount')->default(0);
            $table->integer('total')->default(0);

            $table->enum('status', ['pending', 'procces', 'success', 'expiret'])->default('pending');
            $table->timestamp('payment_time')->nullable();
            $table->timestamp('payment_expired')->nullable();

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
        Schema::dropIfExists('user_courses');
    }
}
