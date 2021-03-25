<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;

class User
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = JWTAuth::user();
        if($user->level_id != "2"){
            return response()->json([
                'status' => false,
                'message' => 'Not Found !',
            ], 404);
        }

        return $next($request);
    }
}