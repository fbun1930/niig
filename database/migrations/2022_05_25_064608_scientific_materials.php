<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ScientificMaterials extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scientfic_materials', function (Blueprint $table) {
            $table->integer('id')->autoIncrement()->unique();
            $table->integer('category_scientific_materials_id')->nullable()->comment('Категория материралов');
            $table->integer('category_year_id')->nullable()->comment('Категория года');
            $table->string('title', 255)->nullable()->comment('Заголовок');
            $table->string('action', 255)->nullable()->comment('URL');
            $table->text('text')->nullable()->comment('Основной текст');
            $table->unsignedInteger('status')->default(0)->comment('Статус');
            $table->string('sort', 255)->nullable()->comment('Сортировка');
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
        Schema::dropIfExists('scientfic_materials');
    }
}
