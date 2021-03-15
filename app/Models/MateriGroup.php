<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class MateriGroup extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'nm_materi', 'courses_id'
    ];

    public function courses()
    {
        return $this->belongsTo('\App\Models\Courses', 'courses_id', 'id');
    }

    public function materi()
    {
        return $this->hasMany('\App\Models\Materi', 'materigroup_id', 'id');
    }
}
