Ext.define('zonblewou.view.mesPages.operations.regularisation.RegularisationListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'cotisationListe',

    title: 'REGULARISATIONS',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Compte',

        'zonblewou.view.mesPages.compte.CompteFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

    controller: 'compteform',


    store: {
        type: 'compte'
    },


    //viewModel: {
    //    type: 'searchresults'
    //},

    //cls: 'shadow',
    //activeTab: 0,
    //margin: 20,

    //items: [{
    //xtype: 'gridpanel',
    cls: 'user-grid',
    //title: 'LISTE DES MEMBRES',
    //routeId: 'user',
    //bind: '{usersResults}',
    //scrollable: false,
    columns: [{
            xtype: 'rownumberer',
            width: 40,
            //dataIndex: 'identifier',
            text: '#'
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'id',
            text: 'Identifiant',
            flex: 0.15,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'numCompte',
            text: 'Numéro',
            flex: 1
        },
        {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'dateCreation',
            text: 'Date de création',
            flex: 1,
            format: 'd/m/Y'

            /*
              renderer: function(value) {
            return Ext.Date.format(value, 'd/m/Y');
            }
            */

        },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'solde',
            text: 'Solde',
            flex: 1,

            renderer: function(value) {
                return Ext.String.format('{0}  FCFA', value);
            }
        },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomMembre} {prenomMembre}',
            text: 'Membre',
            flex: 1
        },

        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onCompteEditAction'
                },
                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-close',

                    tooltip: 'Supprimer',

                    handler: 'onCompteDeleteAction'
                },

                /*
                  listeners: {
                    click: 'onDeleletProfilButtonClick'
                },
                */

                /*
                       
                    handler: function(grid, rowIndex, colIndex) {
                        //Ext.Msg.alert('Alert..!', "you can't send news...!");

                        var rec = grid.getStore().getAt(rowIndex);

                        console.log(rec);

                        //grid.getStore().remove(rec);

                        //grid.getStore().load();

                        // message de confirmation
                        Ext.MessageBox.show({

                            title: 'SUPPRESSION',

                            msg: 'Voulez-vous supprimer cet enregistrement ?',

                            buttons: Ext.MessageBox.YESNO,
                            //buttons: Ext.MessageBox.YESNO,

                            fn: function(button) {

                                if ('yes' == button) {

                                    Ext.data.JsonP.request({

                                        url: 'http://localhost:8000/api/profil/destroy',

                                        params: { "id": rec.get('id'), 'classe': 'Profil' },

                                        writer: {
                                            type: 'json'
                                        },

                                        reader: {
                                            type: 'json'
                                        },

                                        timeout: 30000,

                                        callbackKey: 'callback',

                                        disableCaching: false,

                                        success: function(response) {

                                            console.log(response);

                                            if (response['original']['error'] == false) {
                                                //AFFICHAGE DU MESSAGE A L4UTILISATEUR

                                                Ext.Msg.show({

                                                    title: 'CONFIRMATION',

                                                    msg: response['original']['msg'],

                                                    width: 300,

                                                    buttons: Ext.Msg.OK,
                                                    fn: function(btn) {
                                                        if (btn == 'ok') {
                                                            grid.getStore().load();
                                                            // win.close();
                                                        }
                                                    },
                                                    icon: Ext.MessageBox.INFO
                                                });
                                                // DESACTIVER LE BOUTON
                                                //this.disable();

                                            }
                                        },

                                        failure: function() {

                                            //Ext.Msg.alert('DESOLE', 'Echec de la requête');

                                            Ext.Msg.show({
                                                title: 'ERREUR',
                                                msg: 'Echèc de la requête',
                                                width: 300,
                                                buttons: Ext.Msg.OK,
                                                fn: function(btn) {
                                                    if (btn == 'ok') {
                                                        //store.load();
                                                        // win.close();
                                                    }
                                                },
                                                icon: Ext.MessageBox.ERROR
                                            })

                                        },


                                        scope: this,

                                    });

                                }
                            },
                            icon: Ext.MessageBox.QUESTION
                        });

                    }

                },
                    */


                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-ban',

                    tooltip: 'Détails',

                    handler: 'onAgMarketingDetailAction'

                    /*
                      function(grid, rowIndex, colIndex) {

                         var rec = grid.getStore().getAt(rowIndex);

                         Ext.Msg.alert('Détails', "Id: " + rec.get('id') + " , Profil: " + rec.get('profil'));

                     }
                    */

                }


            ],

            cls: 'content-column',
            width: 120,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'Actions '
        }
    ],

    //}]

});