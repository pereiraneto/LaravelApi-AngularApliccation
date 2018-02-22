<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model
{
    protected $fillable = [
        'nome', 'cpf', 'dataNascimento', 'email', 'telefones',
    ];
}
