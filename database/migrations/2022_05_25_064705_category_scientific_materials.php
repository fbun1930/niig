<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CategoryScientificMaterials extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_scientific_materials', function (Blueprint $table) {
            $table->integer('id')->autoIncrement()->unique();
            $table->string('name', 255)->nullable()->comment('Категория научных материалов');
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
        Schema::dropIfExists('category_scientific_materials');
    }
}
