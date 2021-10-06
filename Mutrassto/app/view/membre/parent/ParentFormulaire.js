Ext.define('MutrasstoApp.view.membre.parent.ParentFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-parent',
    title: 'ENREGISTRER UN PARENT',
    layout: 'form',
    frame: true,

    id: 'formulaireParent',

    requires: [
        'MutrasstoApp.view.membre.MembreController',
        'MutrasstoApp.store.parametre.lienParent.LienParent',
        'MutrasstoApp.store.membre.Membre',

        'Ext.data.JsonP',
        'MutrasstoApp.view.membre.ParentGridModel'
    ],

    contoller: 'membre',

    //viewModel: {
    //   type: 'sessionformviewmodel'
    //},

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Nom et Prénoms',
        name: 'nomPrenomParent',
        bind: '{selection.nomPrenomParent}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        //inputMask: '*'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Adresse',
        name: 'adressParent',
        bind: '{selection.adressParent}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        //inputMask: '*'
    }, {
        xtype: 'combo',
        name: 'membre',
        fieldLabel: 'Membre',
        store: {
            type: 'membre',
            data: [{
                name: 'id',
                name: 'nomPrenomMembre'
            }]
        },
        queryMode: 'local',
        displayField: 'nomPrenomMembre',
        valueField: 'id',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        bind: '{selection.membre}',
        editable: false

    }, {
        xtype: 'combo',
        name: 'lienParent',
        fieldLabel: 'Lien',
        bind: '{selection.lienParent}',
        id: 'comboLienParentFormulaireParent',
        store: {
            type: 'lienParent',
            data: [{
                name: 'id',
                name: 'lienParent'
            }]
        },
        queryMode: 'local',
        displayField: 'lienParent',
        valueField: 'id',
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


            var d = this.up('form').getForm().getValues();

            var gridParent = Ext.getCmp('idParentGrid');

            console.log(d);

            var url = 'http://localhost:8080/parent/create?classe=Parent&format=json'

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

                scope: this,

                success: function(response) {
                    if (response['success'] == true) {
                        //AFFICHAGE DU MESSAGE A L4UTILISATEUR
                        Ext.toast(response['msg'], 'STATUT');

                        // RAFRAICHIR LA GRID SESSION
                        //var gridSession = Ext.getCmp('idCategorieGrid');
                        gridParent.rafraichir();

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