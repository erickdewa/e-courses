<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class UserCourses extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'courses_id', 'user_id', 'method_id', 'status', 'discount', 'total', 'payment_expired', 'payment_time'
    ];

    public function tool()
    {
        return $this->belongsTo('\App\Models\User', 'user_id', 'id');
    }

    public function courses()
    {
        return $this->belongsTo('\App\Models\courses_id', 'courses_id', 'id');
    }

    public function method()
    {
        return $this->belongsTo('\App\Models\PayMethod', 'method_id', 'id');
    }
}
