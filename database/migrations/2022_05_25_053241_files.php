<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Files extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->integer('id')->autoIncrement()->unique();
            $table->integer('material_id')->nullable();
            $table->string('action_url', 255)->nullable()->comment('URL адрес');
            $table->string('name', 255)->nullable();
            $table->string('type', 255)->nullable();
            $table->unsignedInteger('status')->default(0);
            $table->string('sort', 255)->nullable();
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
        Schema::dropIfExists('files');
    }
}
