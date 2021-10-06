Ext.define('MutrasstoApp.view.commande.MainCommandes', {
    extend: 'Ext.panel.Panel',

    xtype: 'mainCommandes',
    scroll: true,
    layout: {
        type: 'center',
        align: 'center'
    },
    width: '100%',
    height: 'fit',

    bodyStyle: {
        //background: '#ffc',
        padding: '300px',
        backgroundImage: 'url(../../resources/img/barfCommande.png)',
        width: '100%',
        height: '200px'

    },

    requires: [
        'Ext.form.Panel',
    ],

    items: [{
        xtype: 'button',
        text: 'Effectuer une commande',
        region: 'center',
        scale: 'large',
        iconCls: 'x-fa fa-shopping-cart',

        handler: function() {

            // VERIFIER UNE SESSION OUVERTE

            Ext.data.JsonP.request({

                // params: d,

                url: 'http://localhost:8080/session/sessionEnCours?classe=Session&format=json',

                writer: {
                    type: 'json'
                },

                reader: {
                    type: 'json'
                },

                callbackKey: 'callback',
                //disableCaching: false,

                scope: this,

                success: function(response) {

                    if (response['success'] == true) {

                        //Ext.toast(response['text'], 'STATUT');

                        // OUVERTURE DE LA PAGE DE COMMANDE

                        Ext.getCmp('idCommandeTabFormulaire').show();

                        // ENVOI DU FORMULAIRE D'ENVOIE



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

            // VERIFIER SI L'USER A DEJA EFFECTUER UNE COMMENDE POUR LA SESSION

        }
    }],

    /*dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        defaults: {
            minWidth: 200
        },
        items: [
            { xtype: 'component', flex: 1 },
            { xtype: 'button', text: 'Button 1' }
        ]
    }]*/


});