<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materis', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();

            $table->unsignedBigInteger('materigroup_id');
            $table->foreign('materigroup_id')->references('id')->on('materi_groups')
                  ->onDelete('cascade');

            $table->string('nm_materi');
            $table->string('thumbnail');
            $table->string('video');
            $table->enum('is_preview', ['Y', 'N'])->default('N');
            $table->string('description');

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
        Schema::dropIfExists('materis');
    }
}
