<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use Uuid;

    protected $fillable = [
        'uuid', 'user_id', 'nm_full', 'date_bird', 'profession', 'bio', 'address', 'image', 'verifed', 'description', 'instagram', 'facebook', 'twitter', 'github'
    ];

    public function user()
    {
        return $this->belongsTo('\App\Models\User', 'user_id', 'id');
    }
}
