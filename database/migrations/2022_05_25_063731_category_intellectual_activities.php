<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CategoryIntellectualActivities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_intellectual_activities', function (Blueprint $table) {
            $table->integer('id')->autoIncrement()->unique();
            $table->string('name', 255)->nullable()->comment('Категория интеллектуальной деятельности');
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
        Schema::dropIfExists('category_intellectual_activities');
    }
}
