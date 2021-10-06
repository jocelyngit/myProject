Ext.define('MutrasstoApp.view.membre.MembreFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-membre',
    title: 'ENREGISTRER UN MEMBRE',
    layout: 'form',
    frame: true,
    id: 'formulaireMembre',

    requires: [
        'MutrasstoApp.view.membre.MembreController',
        'MutrasstoApp.store.parametre.service.Service',
        'MutrasstoApp.store.parametre.profil.Profil',
        'MutrasstoApp.store.parametre.situationMatrimoniale.SituationMatrimoniale',
        'Ext.data.JsonP',
        'MutrasstoApp.view.membre.MembreGridModel',
        //'MutrasstoApp'
        'MutrasstoApp.md5.MD5'
    ],

    contoller: 'membre',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Nom et Prénoms',
        name: 'nomPrenomMembre',
        allowBlank: false,
        bind: '{selection.nomPrenomMembre}',
        blankText: 'Ce champ est obligatoire',
        //inputMask: '*'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Profession',
        name: 'profession',
        allowBlank: false,
        bind: '{selection.profession}',
        blankText: 'Ce champ est obligatoire',
        //inputMask: '*'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Date de naissance',
        name: 'dateNaissance',
        allowBlank: false,
        format: 'y-m-d',
        bind: '{selection.dateNaissance}',
        blankText: 'Ce champ est obligatoire',
        submitFormat: 'Y-m-d',
        maxValue: new Date()

    }, {
        xtype: 'textfield',
        fieldLabel: 'Nom d\'utilisateur',
        name: 'login',
        allowBlank: false,
        bind: '{selection.login}',
        blankText: 'Ce champ est obligatoire',
        //inputMask: '*'
    }, {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        bind: '{selection.store.password}',
        fieldLabel: 'Mot de passe',
        allowBlank: false,
        //value: 'existingPassword'
    }, {
        xtype: 'textfield',
        name: 'email',
        fieldLabel: 'Email',
        bind: '{selection.email}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        vtype: 'email' // requires value to be a valid email address format
    }, {
        xtype: 'combo',
        name: 'services',
        fieldLabel: 'Services',
        //id: 'comboDivisionFormService',
        store: {
            type: 'service',
            data: [{
                name: 'id',
                name: 'services'
            }]
        },
        queryMode: 'local',
        displayField: 'services',
        valueField: 'id',
        bind: '{selection.services}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        editable: false

    }, {
        xtype: 'combo',
        name: 'profil',
        fieldLabel: 'Profil',
        //id: 'comboDivisionFormService',
        store: {
            type: 'profil',
            data: [{
                name: 'id',
                name: 'profil'
            }]
        },
        queryMode: 'local',
        displayField: 'profil',
        valueField: 'id',
        bind: '{selection.profil}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        editable: false

    }, {
        xtype: 'combo',
        name: 'situationMatrimoniale',
        fieldLabel: 'Sit. Matrimoniale',
        //id: 'comboDivisionFormService',
        store: {
            type: 'situationMatrimoniale',
            data: [{
                name: 'id',
                name: 'situationMatrimoniale'
            }]
        },
        queryMode: 'local',
        displayField: 'situationMatrimoniale',
        valueField: 'id',
        bind: '{selection.situationMatrimoniale}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        editable: false

    }],

    buttons: [{

        text: 'Enregistrer',
        scale: 'medium',
        iconCls: 'x-fa fa-save',
        formBind: true,
        //listners: {
        //    Click: 'onSessionBtnEnregistrerClick'
        // }

        handler: function() {


            var identifiantreq = null

            var d = this.up('form').getForm().getValues();

            d['password'] = MutrasstoApp.md5.MD5.encode(d['password']);

            //console.log(d['password']);

            var gridMembre = Ext.getCmp('idMembreGrid');

            if (gridMembre.selection) {
                identifiantreq = gridMembre.selection.id
            }

            console.log(d);

            // console.log(identifiantreq);

            //console.log(gridSession.selection);

            if (identifiantreq == null) {

                // REQUETE ENREGISTREMENT
                Ext.data.JsonP.request({

                    params: d,

                    url: 'http://localhost:8080/membre/create?classe=Membre&format=json',

                    writer: {
                        type: 'json'
                    },

                    reader: {
                        type: 'json'
                    },

                    callbackKey: 'callback',
                    disableCaching: false,

                    scope: this,

                    success: function(response) {

                        if (response['success'] == true) {
                            //AFFICHAGE DU MESSAGE A L4UTILISATEUR
                            Ext.toast(response['msg'], 'STATUT');

                            // RAFRAICHIR LA GRID SESSION
                            //var gridSession = Ext.getCmp('idCategorieGrid');
                            gridMembre.rafraichir();

                            // DESACTIVER LE BOUTON
                            //this.disable();

                            //Affichage DANS LA CONSOLE
                            console.log(response['success']);
                        } else {
                            Ext.Msg.alert(response['msg'], 'STATUT');
                            console.log(response['success']);
                        }

                    },

                    failure: function(response) {
                        Ext.Msg.alert('DESOLE', 'SERVEUR INDISPONIBILITE!! VEUILLEZ REESSAYER PLUS TARD');
                        //Ext.Msg.alert('Failed', action.result.msg);
                    }

                })
            } else {

                console.log('Modification');
                d['id'] = identifiantreq;

                // REQUETE DE MODIFICATION
                Ext.data.JsonP.request({

                    //params: JSON.stringify({'id': identifiantreq }),

                    params: d,

                    url: 'http://localhost:8080/membre/update?classe=Membre&format=json',

                    writer: {
                        type: 'json'
                    },

                    reader: {
                        type: 'json'
                    },

                    callbackKey: 'callback',
                    disableCaching: false,

                    scope: this,

                    success: function(response) {

                        if (response['success'] == true) {
                            //AFFICHAGE DU MESSAGE A L4UTILISATEUR
                            Ext.toast(response['msg'], 'STATUT');

                            // RAFRAICHIR LA GRID SESSION
                            //var gridSession = Ext.getCmp('idCategorieGrid');
                            gridSession.rafraichir();
                        } else {
                            Ext.Msg.alert(response['msg'], 'STATUT');
                            console.log(response['success']);
                        }
                    },
                    failure: function(response) {
                        Ext.Msg.alert('DESOLE', 'SERVEUR INDISPONIBILITE!! VEUILLEZ REESSAYER PLUS TARD');
                    }

                })

            }
        }

    }]

});