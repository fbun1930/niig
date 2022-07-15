<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    public function categories_news()
    {
        return $this->belongsTo(CategoryNews::class);
    }
    protected $fillable = [
        'title',
        'category_news_id',
        'title',
        'action',
        'text',
        'status',
        'sort',
    ];
}
