Ext.define('MutrasstoApp.view.prod.ProdFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-prod',
    title: 'ENREGISTRER UN PRODUIT',
    layout: 'form',
    frame: true,
    id: 'formulaireProduit',

    requires: [
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.store.parametre.categorie.Categorie',
        'MutrasstoApp.view.session.prod.ProdGridModel',
        'MutrasstoApp.store.fournisseur.Fournisseur',
        'MutrasstoApp.store.session.Session',
        //'MutrasstoApp.store.session.SessionPasEnCours'

    ],

    contoller: 'session',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Désignation',
        name: 'designation',
        allowBlank: false,
        bind: '{selection.designation}',
        blankText: 'Ce champ est obligatoire',
        //inputMask: '[A-Za-z0-9]'
    }, {
        xtype: 'combo',
        fieldLabel: 'Catégorie',
        //id: 'comboCategorieProduitForm',
        name: 'categorie',
        store: {
            type: 'categorie',
            autoLoad: true,
            data: [{
                name: 'id',
                name: 'libelleCategorie'
            }]
        },
        queryMode: 'local',
        displayField: 'libelleCategorie',
        valueField: 'id',
        bind: '{selection.libelleCategorie}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        forceSelection: true,
        editable: false

    }, {
        xtype: 'combo',
        fieldLabel: 'Session',
        name: 'session',
        // id: 'comboSessionProduitForm',
        store: {
            type: 'session',
            autoLoad: true,
            data: [{
                name: 'id',
                name: 'dateDebutSession'
            }]
        },
        queryMode: 'local',
        displayField: 'dateDebutSession',
        valueField: 'id',
        bind: '{selection.dateDebutSession}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        forceSelection: true,
        editable: false
    }, {
        xtype: 'combo',
        fieldLabel: 'Fournisseur',
        name: 'fournisseur',
        // id: 'comboFournisseurProduitForm',
        store: {
            type: 'fournisseur',
            autoLoad: true,
            data: [{
                name: 'id',
                name: 'raisonSociale'
            }]
        },
        queryMode: 'local',
        displayField: 'raisonSociale',
        valueField: 'id',
        bind: '{selection.raisonSociale}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        forceSelection: true,
        editable: false,
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

            //RECUPERATION DU GRID PRODUIT
            var gridProduit = Ext.getCmp('idProduitGrid');

            var url = 'http://localhost:8080/produit/create?classe=Produit&format=json'

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
                        //AFFICHAGE DU MESSAGE A L4UTILISATEUR
                        Ext.toast(response['msg'], 'STATUT');

                        // RAFRAICHIR LA GRID SESSION
                        //var gridSession = Ext.getCmp('idCategorieGrid');
                        gridProduit.rafraichir();

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