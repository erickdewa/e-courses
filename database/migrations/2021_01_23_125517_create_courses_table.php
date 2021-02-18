<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();

            $table->string('name');
            $table->string('subname')->nullable();
            $table->string('thumbnile')->default('default.png');
            $table->string('color')->default('FFFFFF');
            $table->string('description')->nullable();
            $table->integer('price')->default(0);
            $table->integer('access', ['lifetime', 'annual', 'month', 'weekly'])->default(0);
            $table->enum('status', ['draft', 'active', 'remove'])->default('active');

            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')
                  ->onDelete('cascade');

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
        Schema::dropIfExists('courses');
    }
}
