Ext.define('MutrasstoApp.view.parametre.modePaiement.ModePaiementFormulaire', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-modePaiement',
    title: 'ENREGISTRER UN MODE DE PAIEMENT',
    layout: 'form',
    id: 'formulaireModePaiement',
    frame: true,
    //reference: 'refCategorieForm',

    requires: [
        // 'MutrasstoApp.view.parametre.ParametreController',
        //'MutrasstoApp.view.parametre.categorie.CategorieGridModel'
    ],

    contoller: 'parametre',

    defaults: {
        xtype: 'textfield'
    },
    items: [{
        xtype: 'textfield',
        fieldLabel: 'M. de Paiement',
        name: 'modePaiement',
        bind: '{selection.modePaiement}',
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

            var gridModePaiement = Ext.getCmp('idModePaiementGrid');

            if (gridModePaiement.selection) {
                identifiantreq = gridModePaiement.selection.id
            }

            console.log(d);

            console.log(identifiantreq);

            //console.log(gridSession.selection);

            if (identifiantreq == null) {

                console.log('Enregistrement');

                // REQUETE ENREGISTREMENT
                Ext.data.JsonP.request({

                    params: d,

                    url: 'http://localhost:8080/modePaiement/create?classe=ModePaiement&format=json',

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
                            gridModePaiement.rafraichir();

                            // DESACTIVER LE BOUTON
                            // this.disable();

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

                    url: 'http://localhost:8080/modePaiement/update?classe=ModePaiement&format=json',

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
                            gridModePaiement.rafraichir();
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