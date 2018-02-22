<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Telefone;

class TelefoneController extends Controller
{
    public function index()
    {
        $telefones = Telefone::all();
        return response()->json($telefones);
    }

    public function show($id)
    {
        $telefone = Telefone::find($id);

        if(!$telefone) {
            return response()->json([
                'message' => 'Telefone não encontrado',
            ], 404);
        }

        return response()->json($telefone);
    }

    public function store(Request $request)
    {
        $telefone = new Telefone();
        $telefone->fill($request->all());
        $telefone->save();

        return response()->json($telefone, 201);
    }

    public function update(Request $request, $id)
    {
        $telefone = Telefone::find($id);

        if(!$telefone) {
            return response()->json([
                'message' => 'Telefone não encontrado',
            ], 404);
        }

        $telefone->fill($request->all());
        $telefone->save();

        return response()->json($telefone);
    }

    public function destroy($id)
    {
        $telefone = Telefone::find($id);

        if(!$telefone) {
            return response()->json([
                'message' => 'Telefone não encontrado',
            ], 404);
        }

        $telefone->delete();
    }
}
