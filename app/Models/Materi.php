<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Materi extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'nm_materi', 'thumbnail', 'description', 'video', ' is_preview', 'materigroup_id'
    ];

    public function materigroup()
    {
        return $this->hasMany('\App\Models\MateriGroup', 'materigroup_id', 'id');
    }
}
