Ext.define('MutrasstoApp.view.session.sessionProd.SessionProduitFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-sessionProduit',
    title: 'ENREGISTRER UN PRODUIT',
    layout: 'form',
    frame: true,

    id: 'formulaireSessionProduit',

    requires: [
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.view.session.sessionProd.SessionProduitGridModel',
        'MutrasstoApp.store.produit.Produit',
        'MutrasstoApp.store.session.Session',
        'Ext.data.JsonP',
        'MutrasstoApp.view.session.sessionProd.SessionProduitGridModel'

    ],

    contoller: 'session',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'combo',
        fieldLabel: 'Session',
        id: 'idcomboSessionSPForm',
        name: 'session',
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
        editable: false,

        listeners: {
            select: function() {

                var valeur1 = this.getValue();
                var combo2 = Ext.getCmp('idcomboProduitSPForm');
                combo2.getStore().load({ params: { val: valeur1 } });
                combo2.displayField = 'designation';
                combo2.valueField = 'id';
            }
        }

    }, {
        xtype: 'combo',
        fieldLabel: 'Produit',
        name: 'produit',
        //typeAhead: true,
        id: 'idcomboProduitSPForm',
        store: {
            type: 'produit',
            //autoLoad: true,
            /*data: [{
                name: 'id',
                name: 'designation',
            }]*/
        },
        //queryMode: 'remote',
        //remoteFilter: true,
        //queryParams: '',
        displayField: 'designation',
        valueField: 'id',
        bind: '{selection.designation}',
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',
        forceSelection: true,
        editable: false,

    }, {
        xtype: 'numberfield',
        name: 'prix',
        fieldLabel: 'Prix',
        minValue: 0,
        allowDecimals: true,
        allowBlank: false,
        blankText: 'Ce champ est obligatoire',

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

            console.log(d['prix']);

            //RECUPERATION DU GRID PRODUIT
            var gridSessionProduit = Ext.getCmp('idSessionProduitGrid');

            var url = 'http://localhost:8080/sessionProduit/create?classe=SessionProduit&format=json'

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
                        gridSessionProduit.rafraichir();

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

    }],


    charger: function() {

        var valeur1 = this.getValue();
        var combo2 = Ext.getCmp('idcomboProduitSPForm')
        combo2.getStore().reload({ params: { val: valeur1 } });
    }

});