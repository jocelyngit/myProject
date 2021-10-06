Ext.define('MutrasstoApp.view.parametre.categorie.CategorieFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-categorie',
    title: 'ENREGISTRER UNE CATEGORIE',
    layout: 'form',
    id: 'formulaireCategorie',
    frame: true,
    reference: 'refCategorieForm',

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'Ext.data.JsonP',
        'MutrasstoApp.view.parametre.categorie.CategorieGridModel'
    ],

    contoller: 'parametre',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Catégorie',
        name: 'libelleCategorie',
        bind: '{selection.libelleCategorie}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        //inputMask: '*'
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

            var gridSession = Ext.getCmp('idCategorieGrid');

            if (gridSession.selection) {
                identifiantreq = gridSession.selection.id
            }

            console.log(d);

            console.log(identifiantreq);

            //console.log(gridSession.selection);

            if (identifiantreq == null) {

                console.log('Enregistrement');

                // REQUETE ENREGISTREMENT
                Ext.data.JsonP.request({

                    params: d,

                    url: 'http://localhost:8080/categorie/create?classe=Categorie&format=json',

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

                            // DESACTIVER LE BOUTON
                            this.disable();

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

                    url: 'http://localhost:8080/categorie/update?classe=Categorie&format=json',

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

            // FIN ELSE
        }

        // FIN BUTTON

    }],

    // METHODE RESET
    /*reset: function(resetRecord) {
        return this.form.reset(resetRecord);

    },*/

});