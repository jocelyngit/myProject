Ext.define('MutrasstoApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    id: 'idLogin',

    requires: [
        //'Ext.plugin.Viewport',
        'MutrasstoApp.view.login.LoginController',
        'Ext.form.Panel',
        'MutrasstoApp.md5.MD5',
        'MutrasstoApp.store.sessionStorage.SessionStorage'
    ],

    //plugins: 'viewport',
    controller: 'login',
    store: {
        type: 'sessionStorage'
    },

    bodyPadding: 10,
    title: 'Se connecter à Mutrassto',
    closable: false,
    autoShow: true,

    // Formulaire de login

    items: {
        xtype: 'form',
        reference: 'form',
        layout: 'form',
        //frame: true,
        items: [{
            xtype: 'textfield',
            name: 'login',
            fieldLabel: 'Nom d\'utilisateur',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Mot de passe',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            name: 'displayField',
            //itemId: 'idLoginDisplayField'
            id: 'idLoginDisplayField'
                //value: 'Enter un mode passe valide'
        }],
        buttons: [{
            text: 'Connexion',
            formBind: true,
            scale: 'medium',
            //listeners: {
            //   click: 'onLoginClick'
            //}

            handler: function() {
                var d = this.up('form').getForm().getValues();

                d['password'] = MutrasstoApp.md5.MD5.encode(d['password'])

                console.log(d);

                var url = 'http://localhost:8080/userConnexion/seConnecter'

                Ext.data.JsonP.request({

                    params: d,
                    url: url,

                    writer: {
                        type: 'json'
                    },

                    reader: {
                        type: 'json'
                    },

                    callbackKey: 'callback',

                    scope: 'this',

                    success: function(response) {

                        if (response['success'] == true) {

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


                        } else {
                            if (response['success'] == false) {
                                var message = response['msg'];
                                console.log(message);

                                //AFFECTATION DU MESSAGE AU DISPLAYFIELD
                                var zonecache = Ext.getCmp('idLoginDisplayField');
                                zonecache.setValue(message);

                            }

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

                    failure: function(response) {
                        Ext.Msg.alert('DESOLE', 'SERVEUR INACESSIBLE OU PROBLEME AVEC LE SERVEUR !');
                        console.log('echec');
                    }

                })

            }
        }]

    },

});

// WINDOW