<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function index()
    {
        $posts = DB::table('posts')->get();

        return $posts;
    }

    public function getPostById(Request $request)
    {
        $post = DB::table("posts")->where("id", "=", $request->id)->get();

        return $post;
    }
}
