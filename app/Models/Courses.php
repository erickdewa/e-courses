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
        return $this->hasMany('\App\Models\User', 'user_id', 'id');
    }
}