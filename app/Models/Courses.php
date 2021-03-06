<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'name', 'subname', 'thumbnile', 'color', 'description', 'price', 'access', 'status', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('\App\Models\User', 'user_id', 'id');
    }

    public function usercourses()
    {
        return $this->belongsTo('\App\Models\UserCourses', 'id', 'courses_id');
    }

    public function coursestool()
    {
        return $this->hasMany('\App\Models\CoursesTool', 'courses_id', 'id');
    }

    public function coursesskill()
    {
        return $this->hasMany('\App\Models\CoursesSkill', 'courses_id', 'id');
    }

    public function coursesreview()
    {
        return $this->hasMany('\App\Models\CoursesReview', 'courses_id', 'id');
    }

    public function courseslearn()
    {
        return $this->hasMany('\App\Models\CoursesLearn', 'courses_id', 'id');
    }

    public function materigroup()
    {
        return $this->hasMany('\App\Models\MateriGroup', 'courses_id', 'id');
    }
}
