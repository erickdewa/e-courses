<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class CoursesTool extends Model
{
    use Uuid;

    protected $fillable = [
    	'uuid', 'courses_id', 'tool_id'
    ];

    public function courses()
    {
    	return $this->hasOne('\App\Models\Courses', 'id', 'courses_id');
    }

    public function tool()
    {
    	return $this->hasOne('\App\Models\Tool', 'id', 'tool_id');
    }
}
