<?php

namespace App\Http\Controllers;

use App\Pessoa;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class PessoaController extends Controller
{
    public function index()
    {
        $pessoas = Pessoa::all();
        return response()->json($pessoas);
    }

    public function show($id)
    {
        $pessoa = Pessoa::find($id);

        if(!$pessoa) {
            return response()->json([
                'message' => 'Pessoa não encontrada',
            ], 404);
        }

        return response()->json($pessoa);
    }

    public function store(Request $request)
    {
        $pessoa = new Pessoa();
        $pessoa->fill($request->all());
        $pessoa->save();

        return response()->json($pessoa, 201);
    }

    public function update(Request $request, $id)
    {
        $pessoa = Pessoa::find($id);

        if(!$pessoa) {
            return response()->json([
                'message' => 'Pessoa não encontrada',
            ], 404);
        }

        $pessoa->fill($request->all());
        $pessoa->save();

        return response()->json($pessoa);
    }

    public function destroy($id)
    {
        $pessoa = Pessoa::find($id);

        if(!$pessoa) {
            return response()->json([
                'message' => 'Pessoa não encontrado',
            ], 404);
        }

        $pessoa->delete();
    }
}
