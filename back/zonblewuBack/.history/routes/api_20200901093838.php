<?php

use Illuminate\Http\Request;

use App\TypeOperation;

use App\User;

use function PHPSTORM_META\map;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




/*
 * Route::prefix('v1')->group(function(){

    Route::post('authentification/auth/login', 'Authentification\AuthController@login');

    Route::post('authentification/auth/register', 'Authentification\AuthController@register');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::post('authentification/auth/getUser', 'Authentification\AuthController@getUser');
    });
});
*/

// Route pour s'authentifier
//
Route::group([
    'namespace' => 'Authentification',
     'prefix' => 'Authentification/auth'], function()
{

    Route::get('/login', 'AuthController@login');

    Route::get('/register', 'AuthController@register');

    Route::get('/getUser', 'AuthController@getUser');

    Route::get('/findAll', 'AuthController@findAll');

    Route::get('/update', 'AuthController@update');

});

/*
 * TYPE OPERATION ROUTE
 */
Route::group(['prefix' => 'typeOperation'], function () {

    Route::get('/findAll', 'TypeOperationController@findAll');

    Route::get('/show', 'TypeOperationController@show');

    Route::get('/store', 'TypeOperationController@store');

    Route::get('/update', 'TypeOperationController@update');

    Route::get('/destroy', 'TypeOperationController@destroy');

});

/*
 * PROFIL ROUTE
 */
 Route::group(['prefix' => 'profil'], function () {

    Route::get('/findAll', 'ProfilController@findAll');

    Route::get('/show', 'ProfilController@show');

    Route::get('/store', 'ProfilController@store');

    Route::get('/update', 'ProfilController@update');

    Route::get('/destroy', 'ProfilController@destroy');

});

/*
* ZONE ROUTE
*/
Route::group(['prefix' => 'zone'], function () {

    Route::get('/findAll', 'ZoneController@findAll');

    Route::get('/show', 'ZoneController@show');

    Route::get('/store', 'ZoneController@store');

    Route::get('/update', 'ZoneController@update');

    Route::get('/destroy', 'ZoneController@destroy');

});

/*
* TYPECOMPTE ROUTE
*/
Route::group(['prefix' => 'typeCompte'], function () {

    Route::get('/findAll', 'TypeCompteController@findAll');

    Route::get('/show', 'TypeCompteController@show');

    Route::get('/store', 'TypeCompteController@store');

    Route::get('/update', 'TypeCompteController@update');

    Route::get('/destroy', 'TypeCompteController@destroy');

});

/*
* AGENCE ROUTE
*/
Route::group(['prefix' => 'agence'], function () {

    Route::get('/findAll', 'AgenceController@findAll');

    Route::get('/show', 'AgenceController@show');

    Route::get('/store', 'AgenceController@store');

    Route::get('/update', 'AgenceController@update');

    Route::get('/destroy', 'AgenceController@destroy');

});


/*
* COMPTE ROUTE
*/
Route::group(['prefix' => 'compte'], function () {

    Route::get('/findAll', 'CompteController@findAll');

    Route::get('/show', 'CompteController@show');

    Route::get('/infoCompte', 'CompteController@infoCompte');

    Route::get('/store', 'CompteController@store');

    Route::get('/update', 'CompteController@update');

    Route::get('/soldeCompte', 'CompteController@soldeCompte');

    Route::get('/destroy', 'CompteController@destroy');

});

/*
* COTISATION ROUTE
*/
Route::group(['prefix' => 'cotisation'], function () {

    Route::get('/findAll', 'CotisationController@findAll');

    Route::get('/show', 'CotisationController@show');

    Route::get('/store', 'CotisationController@store');

    Route::get('/update', 'CotisationController@update');

    Route::get('/destroy', 'CotisationController@destroy');

    Route::get('/allCotisation', 'CotisationController@allCotisation');

});


/*
* MEMBRE ROUTE
*/
Route::group(['prefix' => 'membre'], function () {

    Route::get('/findAll', 'MembreController@findAll');

    Route::get('/show', 'MembreController@show');

    Route::get('/store', 'MembreController@store');

    Route::get('/update', 'MembreController@update');

    Route::get('/destroy', 'MembreController@destroy');

});


/*
* OPERATION ROUTE
*/
Route::group(['prefix' => 'operation'], function () {

    Route::get('/findAll', 'OperationController@findAll');

    Route::get('/show', 'OperationController@show');

    Route::get('/store', 'OperationController@store');

    Route::get('/update', 'OperationController@update');

    Route::get('/destroy', 'OperationController@destroy');

    Route::get('/infoComptePourRetrait', 'OperationController@infoComptePourRetrait');

});


/*
* CALCULOPPORTUNITE ROUTE
*/
Route::group(['prefix' => 'calculOpportunite'], function () {

    Route::get('/retrieve', 'CalculOpportuniteController@retrieve');

});


/*
 * AGENT MARKETING ROUTE
 */
Route::group(['prefix' => 'agentMarketing'], function () {

    Route::get('/findAll', 'AgentMarketingController@findAll');

    Route::get('/show', 'AgentMarketingController@show');

    Route::get('/store', 'AgentMarketingController@store');

    Route::get('/update', 'AgentMarketingController@update');

    Route::get('/destroy', 'AgentMarketingController@destroy');

});

/*
 * COMPTE DE DEPOT ROUTE
 */
Route::group(['prefix' => 'compteDeDepot'], function () {

    Route::get('/findAll', 'CompteDeDepotController@findAll');

    Route::get('/show', 'CompteDeDepotController@show');

    Route::get('/depot', 'CompteDeDepotController@depot');

    Route::get('/infoCompteDepot', 'CompteDeDepotController@infoCompteDepot');

    Route::get('/store', 'CompteDeDepotController@store');

    Route::get('/update', 'CompteDeDepotController@update');

    Route::get('/destroy', 'CompteDeDepotController@destroy');

});


/*
 * OPPORTUNITE
 */
Route::group(['prefix' => 'opportunite'], function () {

    Route::get('/findAll', 'OpportuniteController@findAll');

    Route::get('/show', 'OpportuniteController@show');

    Route::get('/store', 'OpportuniteController@store');

    Route::get('/update', 'OpportuniteController@update');

    Route::get('/destroy', 'OpportuniteController@destroy');

});

/**
 * PROFESSION ROUTE
 */

Route::group(['prefix' => 'profession'], function () {

    Route::get('/findAll', 'ProfessionController@findAll');

    Route::get('/show', 'ProfessionController@show');

    Route::get('/store', 'ProfessionController@store');

    Route::get('/update', 'ProfessionController@update');

    Route::get('/destroy', 'ProfessionController@destroy');

});

 /**
  * SECTEUR ACTIVITE ROUTE
  */

  Route::group(['prefix' => 'secteurActivite'], function () {

    Route::get('/findAll', 'SecteurActiviteController@findAll');

    Route::get('/show', 'SecteurActiviteController@show');

    Route::get('/store', 'SecteurActiviteController@store');

    Route::get('/update', 'SecteurActiviteController@update');

    Route::get('/destroy', 'SecteurActiviteController@destroy');

});

  /**
   * DEPOT MARKETEUR ROUTE
   */

  Route::group(['prefix' => 'depotMarketeur'], function () {

    Route::get('/findAll', 'DepotMarketeurController@findAll');

    Route::get('/show', 'DepotMarketeurController@show');

    Route::get('/store', 'DepotMarketeurController@store');

    Route::get('/infoCompteDep', 'DepotMarketeurController@infoCompteDep');

    Route::get('/getDepotDuJour', 'DepotMarketeurController@getDepotDuJour');

    Route::get('/update', 'DepotMarketeurController@update');

    Route::get('/destroy', 'DepotMarketeurController@destroy');

});
