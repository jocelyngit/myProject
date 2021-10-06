Ext.define('zonblewou.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here


    requires:[
        'Ext.window.Toast',
    ],

    onLoginButton: function() {

       // var displayField = this.lookupReference('loginDisplayFieldRef');

        var loginView = this.getView().up('window');

        var dataForm = this.getView().getForm().getValues();

        //displayField.setValue('');

        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/Authentification/auth/login?classe=User&format=json',

            params: dataForm,

            writer: {
                type: 'json'
            },

            reader: {
                type: 'json'
            },

            callbackKey: 'callback',

            scope: 'this',

            success: function(response) {

                if (response['success']['error'] == false) {

                    console.log(response['success']['userSpecifique']);

                    var user = response['success']['userSpecifique'];

                    zonblewou.vars.AllVars.token = response['success']['token'];

                    zonblewou.vars.AllVars.idUser = user['id'];

                    zonblewou.vars.AllVars.idAgence = user['idAgence'],

                        zonblewou.vars.AllVars.idProfil = user['idProfil'],

                        zonblewou.vars.AllVars.login = user['login'],

                        zonblewou.vars.AllVars.nomUser = user['nomUser'],

                        zonblewou.vars.AllVars.prenomUser = user['prenomUser'],

                        zonblewou.vars.AllVars.telUser = user['telUseer'],

                    // return to the server

                    Ext.data.JsonP.request({

                        url: zonblewou.vars.AllVars.url + '/api/profil/getProfil?classe=Profil&format=json',

                        params: {'idProfil' : zonblewou.vars.AllVars.idProfil },

                        writer: {
                            type: 'json'
                        },

                        reader: {
                            type: 'json'
                        },

                        callbackKey: 'callback',

                        scope: 'this',

                        success: function (response) {

                            if (response['original']['error'] == false) {

                                console.log('profil trouv');
                                console.log(response['original']['msg'][0]['profil']);

                                // destruction de login Page

                                loginView.destroy();

                                // ouverture des pages

                                if (response['original']['msg'][0]['profil'] == "ADMINISTRATEUR"){

                                    Ext.create('zonblewou.view.main.Main', {
                                        someConfig: true
                                    });

                                }
                                    else if (response['original']['msg'][0]['profil'] == "COORDINATEUR"){

                                    Ext.create('zonblewou.view.coordinateur.CoordinateurMain', {
                                        someConfig: true
                                    });
                                }
                                        else if (response['original']['msg'][0]['profil'] == "CONTROLLEUR"){

                                    Ext.create('zonblewou.view.controlleurView.main.ControlleurMain', {
                                        someConfig: true
                                    });
                                }
                                            else if (response['original']['msg'][0]['profil'] == "CAISSE"){

                                    Ext.create('zonblewou.view.caisseView.main.CaisseMain', {
                                        someConfig: true
                                    });
                                }
                                            else if (response['original']['msg'][0]['profil'] == "CHEF AGENCE" || response['original']['msg'][0]['profil'] == "COMPTABLE"){
                                    Ext.create('zonblewou.view.chefagcomp.ChefagCompMain', {
                                        someConfig: true
                                    });
                                }

                            }
                            else if (response['original']['error'] == true){

                                console.log('profil non trouvé');
                                console.log(response['original']['msg']);

                            }
                        },

                        failure: function () {

                            Ext.Msg.alert('PROFIL', 'Echèc de la requête');
                        }

                    });

                } else if (response['success']['error'] == true) {

                    console.log(response['success']['msg']);

                    Ext.toast({
                        html: response['success']['msg'],
                        title: 'ECHEC',
                        width: 300,
                        align: 't',
                        animateShadow : true,
                        /*align: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },

                         */
                        bodyPadding: '10 20 10 20',
                        autoCloseDelay: 2500,
                    });

                   // displayField.setValue(response['success']['msg']);
                }

            },

            failure: function() {
                Ext.Msg.alert('ECHEC', 'Echèc de la requête');

            }

        })

    },



    /*
    onFaceBookLogin: function() {
        this.redirectTo('dashboard', true);
    },

       onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount: function() {
        this.redirectTo('register', true);
    },

    onSignupClick: function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick: function() {
        this.redirectTo('dashboard', true);
    }
    */

});