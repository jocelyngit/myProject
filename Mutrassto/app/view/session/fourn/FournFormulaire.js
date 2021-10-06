Ext.define('MutrasstoApp.view.session.fourn.FournFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-fourn',
    title: 'ENREGISTRER UN FOURNISSEUR',

    layout: 'form',
    frame: true,
    id: 'formulaireFournisseur',

    requires: [
        'MutrasstoApp.view.session.fourn.FournFormulaireController',
        'Ext.data.JsonP',
        'MutrasstoApp.view.session.fourn.FournGridModel'
    ],

    contoller: 'fournformulaire',

    scope: 'controller',

    defaults: {
        xtype: 'textfield'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Raison sociale',
        name: 'raisonSociale',
        allowBlank: false,
        bind: '{selection.raisonSociale}',
        blankText: 'Ce champ est obligatoire'
            //inputMask: '*'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Adresse',
        name: 'adressFournisseur',
        allowBlank: false,
        bind: '{selection.adressFournisseur}',
        blankText: 'Ce champ est obligatoire',
        //inputMask: '*'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Téléphone',
        name: 'telFournisseur',
        allowBlank: false,
        bind: '{selection.telFournisseur}',
        blankText: 'Ce champ est obligatoire',
        placeholder: '(xxx) xxx-xxx-xxx',
        inputMask: '(999) 999-999-999'
    }, {
        xtype: 'textfield',
        name: 'emailFournisseur',
        fieldLabel: 'Email',
        allowBlank: false,
        bind: '{selection.emailFournisseur}',
        blankText: 'Ce champ est obligatoire',
        vtype: 'email' // requires value to be a valid email address format
    }],

    buttons: [{

        text: 'Enregistrer',
        scale: 'medium',
        iconCls: 'x-fa fa-save',
        formBind: true,
        /*listeners: {
            click: {

                element: 'onFournBtnEnregistrerClick' //bind to the underlying el property on the panel
                    //fn: function() { alert('click el'); }
            }
        }*/

        handler: function() {

            var form = this.up('form').getForm();

            var d = form.getValues();


            //RECUPERATION DU GRID FOURNISSEUR
            var gridFournisseur = Ext.getCmp('idFournisseurGrid');


            console.log(d);

            var url = 'http://localhost:8080/fournisseur/create?classe=Fournisseur&format=json'

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
                        gridFournisseur.rafraichir();

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
                    Ext.Msg.alert('DESOLE', 'SERVEUR INACESSIBLE OU PROBLEME AVEC LE SERVEUR !');
                    console.log('echec');
                }
            })
        }

    }]

});