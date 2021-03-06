<?php

use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;
use App\Models\Tool;

class ToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tools')->delete();
        $data = array(
        	array('id' => 1, 'nm_tool' => 'Figma', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'figma.com'),
        	array('id' => 2, 'nm_tool' => 'Canva', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'canva.com'),
        	array('id' => 3, 'nm_tool' => 'Sublime Text', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'sublimetext.com'),
        	array('id' => 4, 'nm_tool' => 'Flaticon', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'flaticon.com'),
        	array('id' => 5, 'nm_tool' => 'Visual Studio', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'visualstudio.com'),
        	array('id' => 6, 'nm_tool' => 'Android Studio', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'developer.android.com'),
        	array('id' => 7, 'nm_tool' => 'Blender', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'blender.org'),
        	array('id' => 8, 'nm_tool' => 'Photoshop', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'adobe.com'),
        	array('id' => 9, 'nm_tool' => 'After Effect', 'description' => '-', 'image' => '/img/tool/default.png', 'link' => 'adobe.com'),
        );

        foreach($data as $value)            
            
        Tool::create($value);
    }
}
