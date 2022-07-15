<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\CategoryNews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$news = News::with('category_news')->get();
        //$news = News::all();

        $news = DB::table('news')
            ->select([
                'news.id as id',
                'news.title as title',
                'news.action as action',
                'news.created_at as created_at',
                'news.sort as sort',
                'news.status as status',
                'news.text as text',
                'news.updated_at as updated_at',
                'category_news.name as category_news_id',
            ])
            ->join('category_news', 'category_news.id', '=', 'news.category_id')
            ->get();


        return response()->json($news);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        //return $request->title;
        $new_item = News::create([
            'title' => $request->title,
            'action' => $request->action,
            'text' => $request->text,
            'status' => 1,
            'sort' => 1,
            'category_news_id' => 1,
        ]);
        $dictionary = News::where('id', $new_item->id)->get();
        return response()->json($dictionary);

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $news = News::find($id);
        if ($news) {
            $news->delete();
            return response()->json('item was deleted');
        }else {
            return response()->json('item not found');
        }
    }

    public function CategoriesNews()
    {
        $categories_news = CategoryNews::orderBy('created_at', 'asc')->get();
        return $categories_news;
    }
}
