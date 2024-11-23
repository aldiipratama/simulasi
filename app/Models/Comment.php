<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
  /** @use HasFactory<\Database\Factories\CommentFactory> */
  use HasFactory;

  protected $guarded = ['id'];

  public function post()
  {
    return $this->belongsTo(Post::class);
  }

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function like()
  {
    return $this->hasMany(Like::class, 'comment_id');
  }
}