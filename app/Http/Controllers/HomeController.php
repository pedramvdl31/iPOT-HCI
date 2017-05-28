<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Input;
use Validator;
use Redirect;
use Hash;
use Route;
use Response;
use Auth;
use URL;
use Session;
use DB;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
	public function __construct() {
        $this->layout = "layouts.master";
        //CHECK IF THE HOMEPAGE IS SET
    }

        public function getIndex()
    {   
        return view('pages.index')
        ->with('layout',$this->layout);
    }
}
