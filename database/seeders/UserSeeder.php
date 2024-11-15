<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    User::factory()->create([
      'name' => 'Aldi Pratama',
      'email' => 'paldi0013@gmail.com',
      'role' => "admin"
    ]);

    User::factory()->create([
      'name' => 'test',
      'email' => 'test@gmail.com',
    ]);

    User::factory(10)->create();
  }
}
