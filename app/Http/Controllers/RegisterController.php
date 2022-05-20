<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\User;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        $user = new User;
        $user->email = $request->email;
        $user->name = $request->name;
        $user->password = bcrypt($request->password);
        $user->save();

        $user->assignRole('writer');

    }
    public function roles()
    {
        $mas= array();
        $roles = Role::all();
        $user = User::where('id', Auth::user()->id)->first();
        foreach($roles as $role){
            if($user->hasRole($role->name)){
                $mas[$role->name] = $role->name;
            }
        }
        return $mas;
    }
    public function headerlinks()
    {
        $mas= array();
        if ( Auth::check()) {
        //if (auth('sanctum')->check()) {
            //$mas['/todolist'] = 'Список дел';
            //$mas['/chat'] = 'Чат';
            $mas['/dishes'] = 'Блюда';
            $mas['/products'] = 'Продукты';
            $mas['/menus'] = 'Мои меню';
            $mas['/cabinet'] = 'Личный кабинет';

        }else{
            $mas['/login'] = 'Авторизация';
            //$mas['/registr'] = 'Регистрация';
        }

        return $mas;
    }
}
