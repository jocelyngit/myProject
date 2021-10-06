Ext.define('MutrasstoApp.view.parametre.service.ServicesFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-services',
    title: 'ENREGISTRER UN SERVICE',
    layout: 'form',
    jsonSubmit: true,
    method: 'POST',
    frame: true,
    id: 'formulaireServices',

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.store.parametre.division.Division',
        'Ext.data.JsonP',
        'MutrasstoApp.view.parametre.service.ServicesGridModel'
    ],

    contoller: 'parametre',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'combo',
        fieldLabel: 'Division',
        name: 'division',
        id: 'comboDivisionFormService',
        store: {
            type: 'division',
            data: [{
                name: 'id',
                name: 'division'
            }]
        },
        queryMode: 'local',
        displayField: 'division',
        valueField: 'id',
        bind: '{selection.division}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        editable: false

    }, {
        xtype: 'textfield',
        fieldLabel: 'Nom du service',
        name: 'services',
        bind: '{selection.services}',
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

            // var identifiantreq = null

            var d = this.up('form').getForm().getValues();

            var gridServices = Ext.getCmp('idServicesGrid');

            //  if (gridServices.selection) {
            //     identifiantreq = gridServices.selection.id
            //  }

            console.log(d);

            // console.log(identifiantreq);

            //console.log(gridSession.selection);

            //if (identifiantreq == null) {

            console.log('Enregistrement');

            // REQUETE ENREGISTREMENT
            Ext.data.JsonP.request({

                params: d,

                url: 'http://localhost:8080/services/create?classe=Services&format=json',

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
                        gridServices.rafraichir();

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
                }

            })
        }

    }]

});