<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Region;

class RegionController extends Controller
{
    public function index() {
        $regions = Region::all();
        return Inertia::render('Region/Index', ['regions' => $regions]);
    }

    public function create() {
        return Inertia::render('Region/Create');
    }

    public function store(Request $request)  {
        $request->validate([
            'name' => 'required|unique:regions'
        ]);
        $region = new Region($request->all());
        $region->slug = $request->input('name');
        $region->save();
        return redirect()->route('regions.index');
    }

    public function edit(Region $region) {
        return Inertia::render('Region/Create', ['region' => $region, 'isUpdating' => true]);
    }

    public function update(Request $request, Region $region) {
        $region->update($request->all());
        return redirect()->route('regions.index');
    }

    public function destroy(Region $region) {
        $region->delete();
        return redirect()->back();
    }
}
