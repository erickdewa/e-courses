<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class CoursesReview extends Model
{
    use Uuid;

    protected $fillable = [
    	'uuid', 'courses_id', 'user_id', 'rate', 'description', 'is_preview'
    ];
}
