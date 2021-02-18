<?php

use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        $data = array(
        	array('id' => 1, 'username' => 'user', 'name' => 'User', 'email' => 'admin@gmail.com', 'password' => '12345678', 'level_id' => 1),
        );

        foreach($data as $value)            
            
        User::create($value);
    }
}
