<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class CoursesSkill extends Model
{
    use Uuid;

    protected $fillable = [
    	'uuid', 'courses_id', 'skill_id'
    ];

    public function courses()
    {
    	return $this->hasOne('\App\Models\Courses', 'id', 'courses_id');
    }

    public function skill()
    {
    	return $this->hasOne('\App\Models\Skill', 'id', 'skill_id');
    }
}
