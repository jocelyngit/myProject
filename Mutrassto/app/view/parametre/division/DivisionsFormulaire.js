Ext.define('MutrasstoApp.view.parametre.division.DivisionsFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-division',
    title: 'ENREGISTRER UNE DIVISION',
    layout: 'form',
    frame: true,
    id: 'formulaireDivision',

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.division.DivisionGridModel',
        'Ext.data.JsonP',

    ],

    contoller: 'parametre',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Nom de la didision',
        name: 'division',
        allowBlank: false,
        bind: '{selection.division}',
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


            //var identifiantreq = null

            var d = this.up('form').getForm().getValues();

            var gridDivision = Ext.getCmp('idDivisionGrid');

            // if (gridDivision.selection) {
            //     identifiantreq = gridDivision.selection.id
            //}

            console.log(d);

            //console.log(identifiantreq);

            //console.log(gridSession.selection);

            //if (identifiantreq == null) {

            console.log('Enregistrement');

            // REQUETE ENREGISTREMENT
            Ext.data.JsonP.request({

                params: d,

                url: 'http://localhost:8080/division/create?classe=Division&format=json',

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
                        gridDivision.rafraichir();

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