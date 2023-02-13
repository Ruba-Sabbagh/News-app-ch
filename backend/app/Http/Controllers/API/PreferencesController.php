<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Preferences;
use Illuminate\Http\Request;

class PreferencesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $preferences = Preferences::all();
        return response()->json([
            'status'=> 200,
            'message' => $preferences
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $preferences = new Preferences;
        $preferences->name=$request->input('name');
        $preferences->type=$request->input('type');
        $preferences->save();

        return response()->json([
            'status'=> 200,
            'message' => 'Preference Added Successfully'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Preferences  $preferences
     * @return \Illuminate\Http\Response
     */
    public function show(Preferences $preferences)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Preferences  $preferences
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Preferences $preferences)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Preferences  $preferences
     * @return \Illuminate\Http\Response
     */
    public function destroy(Preferences $preferences)
    {
        //
    }
}
