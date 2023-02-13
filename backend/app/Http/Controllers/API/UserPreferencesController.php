<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\UserPreferences;
use Illuminate\Http\Request;

class UserPreferencesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserPreferences  $userPreferences
     * @return \Illuminate\Http\Response
     */
    public function show(UserPreferences $userPreferences)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserPreferences  $userPreferences
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserPreferences $userPreferences)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserPreferences  $userPreferences
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserPreferences $userPreferences)
    {
        //
    }
}
