Ext.define('MutrasstoApp.view.parametre.profil.ProfilFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-profil',
    title: 'ENREGISTRER UN PROFIL',
    layout: 'form',
    frame: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'Ext.data.JsonP',
        'Ext.form.action.Submit'

    ],

    contoller: 'parametre',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Profil',
        name: 'profil',
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

            var form = this.up('form').getForm();

            var d = form.getValues();

            console.log(d);

            var url = 'http://localhost:8080/profil/create?classe=Profil&format=json'

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

                scope: 'this',

                success: function(response) {
                    Ext.toast('Ennregistrement effectué avec succès', 'STATUT', 't')
                        //console.log('success');
                },

                failure: function(response) {
                    Ext.Msg.alert('DESOLE', 'SERVEUR INACESSIBLE OU PROBLEME AVEC LE SERVEUR !');
                    console.log('echec');
                }
            })
        }

    }]

});