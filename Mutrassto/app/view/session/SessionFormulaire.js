Ext.define('MutrasstoApp.view.session.SessionFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-session',
    title: 'ENREGISTRER UNE SESSION',
    layout: 'form',
    frame: true,
    id: 'formulaireSession',

    requires: [
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.view.session.SessionGridModel',
        'Ext.data.JsonP'

    ],

    //contoller: 'session',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Date de début',
        name: 'dateDebutSession',
        allowBlank: false,
        format: 'd-m-Y',
        bind: '{selection.dateSession}',
        blankText: 'Ce champ est obligatoire',
        submitFormat: 'Y-m-d',
        minValue: new Date()

    }],

    buttons: [{

        text: 'Enregistrer',
        scale: 'medium',
        iconCls: 'x-fa fa-save',
        formBind: true,
        //listners: {
        //  click: 'onSessionBtnEnregistrerClick'
        //}

        handler: function() {


            var formulaire = this.up('form').getForm();

            var d = formulaire.getValues();
            d['etatEvenement'] = 1;

            console.log(d);

            var gridSession = Ext.getCmp('idSessionGrid');

            var url = 'http://localhost:8080/session/create?classe=Session&format=json'

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
        }

    }]

});