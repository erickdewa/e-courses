<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class UserCourses extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'courses_id', 'user_id', 'method_id', 'status', 'discount', 'total', 'payment_time', 'time_ended', 'bukti', 'note'
    ];

    public function courses()
    {
        return $this->belongsTo('\App\Models\Courses', 'courses_id', 'id');
    }

    public function method()
    {
        return $this->belongsTo('\App\Models\PayMethod', 'method_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo('\App\Models\User', 'user_id', 'id');
    }
}
