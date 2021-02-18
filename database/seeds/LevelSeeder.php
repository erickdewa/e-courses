<?php

use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;
use App\Models\Level;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('levels')->delete();
        $data = array(
        	array('id' => 1, 'name' => 'admin'),
        	array('id' => 2, 'name' => 'user'),
        );

        foreach($data as $value)            
            
        Level::create($value);
    }
}
