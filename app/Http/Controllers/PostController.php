<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PostController extends Controller
{
  public function index()
  {
    $posts = DB::table('posts')->get();

    return json_decode($posts);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store()
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(Request $request)
  {
    $post = DB::table('posts')->where('id', $request->id)->get();

    return json_decode($post);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit()
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update()
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy()
  {
    //
  }
}
