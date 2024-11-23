<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SharePost extends Model
{
  /** @use HasFactory<\Database\Factories\SharePostFactory> */
  use HasFactory;

  protected $guarded = ['id'];

  public $timestamps = false;

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function post()
  {
    return $this->belongsTo(Post::class);
  }
}
