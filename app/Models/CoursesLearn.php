<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class CoursesLearn extends Model
{
    use Uuid;

    protected $fillable = [
    	'uuid', 'courses_id', 'text'
    ];
}
