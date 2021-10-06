Ext.define('zonblewou.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here



    onLoginButton: function() {

        var displayField = this.lookupReference('loginDisplayFieldRef');

        var loginView = this.getView().up('window');

        var dataForm = this.getView().getForm().getValues();

        Ext.data.JsonP.request({

            url: 'http://localhost:8000/api/Authentification/auth/login?classe=User&format=json',

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

                    console.log(user['id']);

                    //loginView.destroy();

                    /*
                      Ext.create('zonblewou.view.main.Main', {

                    });
                    */


                    // CREATION DU STORE
                    //var maSession = Ext.getStore('idsessionStorageKey');
                    //loggedIn = MutrasstoApp.store.sessionStorage.SessionStorage.create({
                    //    someConfig: true
                    //});

                    //console.log(maSession.load());
                    //    id: 'myOtherProxyKey'
                    //});
                    // COPIE DES INFORMATIONS DANS LA VARIABLE DE SESSION
                    //maSession = response['info'];

                    /*
                      sessionStorage.setItem('idsessionStorageKey', response['info'][1]);

                    //console.log(loggedIn.data.items);

                    // RECUPERATION DE LA PAGE DE LOGIN
                    var pageLogin = Ext.getCmp('idLogin');

                    // RECUPERATION DU PROFIL ET DE L'IDENTIFIANT
                    MutrasstoApp.variableGlobale.VariableGlobale.identifiantConnecte = response['info'][0]

                    console.log(MutrasstoApp.variableGlobale.VariableGlobale.identifiantConnecte);
                    var profil = response['info'][1];

                    console.log(profil)

                    if (profil == 'MEMBRE') {

                        // DESTRUCTION DE LA PAGE LOGIN
                        pageLogin.destroy();

                        //PAGE MEMBRE
                        Ext.create({
                            xtype: 'app-mainMembre'
                        });

                    } else {
                        if ((profil == 'SECRETAIRE') || (profil == 'SECRETAIRE ADJOINT')) {

                            // DESTRUCTION DE LA PAGE LOGIN
                            pageLogin.destroy();

                            //PAGE SECRETAIRE
                            Ext.create({
                                xtype: 'app-mainSecretaire'
                            });

                        } else {
                            if ((profil == 'TRESORIER(E)') || (profil == 'TRESORIER(E) ADJOINT')) {

                                // DESTRUCTION DE LA PAGE LOGIN
                                pageLogin.destroy();

                                //PAGE TRESORIER
                                Ext.create({
                                    xtype: 'app-mainTresorerie'
                                });

                            } else {
                                if ((profil == 'PRESIDENT') || (profil == 'VICE-PRESIDENT')) {

                                    // DESTRUCTION DE LA PAGE LOGIN
                                    pageLogin.destroy();

                                    //PAGE PRESIDENT
                                    Ext.create({
                                        xtype: 'app-main'
                                    });

                                }

                            }

                        }
                    }
                    */

                } else if (response['success']['error'] == true) {

                    console.log(response['success']['msg']);

                    displayField.setValue(response['success']['msg']);

                    //var message = response['msg'];
                    //console.log(message);

                    //AFFECTATION DU MESSAGE AU DISPLAYFIELD
                    /*
                      var zonecache = Ext.getCmp('idLoginDisplayField');
                      zonecache.setValue(message);
                    */

                }
                //if (response == true) {
                // This would be the ideal location to verify the user's credentials via
                // a server-side lookup. We'll just move forward for the sake of this example.

                // Set the localStorage value to true
                //localStorage.setItem("TutorialLoggedIn", true);

                // Remove Login Window
                //var cop = Ext.getCmp('login');
                //cop.destroy();

                // Add the main view to the viewport


                // }
                //else{

                //}
                //console.log('success');

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