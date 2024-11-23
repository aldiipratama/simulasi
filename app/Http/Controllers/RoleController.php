<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
  public function index()
  {
    $roles = DB::table('roles')->get();

    return json_decode($roles);
  }

  public function show(Request $request)
  {
    $role = DB::table('roles')->where('id', $request->id)->get();

    return json_decode($role);
  }
}
