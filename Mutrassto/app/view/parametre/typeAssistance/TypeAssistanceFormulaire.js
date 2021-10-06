Ext.define('MutrasstoApp.view.parametre.typeAssistance.TypeAssistanceFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-typeAssistance',
    title: 'ENREGISTRER UN TYPE D\'ASSISTANCE',
    layout: 'form',
    frame: true,

    id: 'formulaireTypeAssistance',

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        //'MutrasstoApp.view.session.SessionFormModel',
        'Ext.data.JsonP',
        'MutrasstoApp.view.parametre.typeAssistance.TypeAssistanceGridModel'

    ],

    contoller: 'parametre',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
            xtype: 'textfield',
            fieldLabel: 'Type d\'assistance',
            name: 'typeAssistance',
            allowBlank: false,
            blankText: 'Ce champ est obligatoire',
            bind: '{selection.typeAssistance}'
                //inputMask: '*'
        }, {
            xtype: 'numberfield',
            name: 'montantAlloue',
            fieldLabel: 'Montant alloué',
            minValue: 0,
            allowDecimals: true,
            allowBlank: false,
            blankText: 'Ce champ est obligatoire',
            bind: '{selection.montantAlloue}'

        }, {
            xtype: 'textareafield',
            grow: true,
            name: 'descripAssistance',
            fieldLabel: 'Description',
            allowBlank: false,
            blankText: 'Ce champ est obligatoire',
            bind: '{selection.descripAssistance}'
                //inputMask: '*'
        }

    ],

    buttons: [{

        text: 'Enregistrer',
        scale: 'medium',
        iconCls: 'x-fa fa-save',
        formBind: true,
        //listners: {
        //    Click: 'onSessionBtnEnregistrerClick'
        // }

        handler: function() {


            var form = this.up('form').getForm();

            var d = form.getValues();

            console.log(d);

            var gridTypeAssistanceMembre = Ext.getCmp('idTypeAssistanceGrid');

            var url = 'http://localhost:8080/typeAssistance/create?classe=TypeAssistance&format=json'

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
                        gridTypeAssistanceMembre.rafraichir();

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
                    Ext.Msg.alert('DESOLE', 'SERVEUR INACESSIBLE OU PROBLEME AVEC LE SERVEUR !');
                    console.log('echec');
                }
            })
        }

    }]

});