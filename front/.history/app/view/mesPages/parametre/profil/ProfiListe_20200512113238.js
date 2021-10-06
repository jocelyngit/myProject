Ext.define('zonblewou.view.mesPages.parametre.profil.ProfiListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'profiListe',

    title: 'LISTE DES PROFILS',

    reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Profil',

        'zonblewou.view.mesPages.parametre.profil.ProfilFormController'
    ],

    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            //ui: 'footer',
            defaults: { cls: 'btn-orange' },
            items: [{
                xtype: 'button',
                iconCls: 'x-fa fa-plus',
                reference: 'profilTbarAjouter',
                text: '<b>Ajouter</b>',

                handler: 'onProfilBtnAjouter',

                // HANDELER
                /*
                   handler: function() {

                    var form = this.up('form').getForm();

                    form.reset();

                }
                */

            }],

        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            //store: profil,
            itemId: 'userPaginationToolbar',
            displayInfo: true,
            //bind: '{usersResults}'
        }
    ],

    controller: 'profilform',

    store: {
        type: 'profil'
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
            hidden: true,
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'profil',
            text: 'Profil',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onProfilEditAction'
                        /*

                                    //columns: [{ header: 'World' }], // One header just for show. There's no data,
                                    //store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
                                }
                            }).show();

                        }

                                */

                },
                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-close',

                    tooltip: 'Supprimer',

                    handler: 'onProfilDeleteAction'

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
                    */


                }
                /*
                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-ban',

                    tooltip: 'Détails',

                    handler: function(grid, rowIndex, colIndex) {

                        var rec = grid.getStore().getAt(rowIndex);

                        //Ext.Msg.alert('Détails', "Id: " + rec.get('id') + " , Profil: " + rec.get('profil'));

                    }
                }
                  
                */

            ],

            cls: 'content-column',
            width: 120,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'Actions '
        }
    ],

    //}]


    /*
    initComponent: function() {

        this.tbar = {
            reference: 'progress',
            defaultButtonUI: 'wizard-' + this.colorScheme,
            cls: 'wizardprogressbar',
            defaults: {
                //disabled: true,
                iconAlign: 'top'
            },
            layout: {
                pack: 'center'
            },
            items: [{
                    //step: 0,
                    iconCls: 'fa fa-plus',
                    pressed: true,
                    //enableToggle: true,
                    text: 'Ajouter'
                },
                {
                    //step: 1,
                    iconCls: 'fa fa-user',
                    //enableToggle: true,
                    text: 'Consulter',
                    itemIndex: 'consulter',

                    // listners
                    listeners: {
                        click: 'onTbarConsulterClick'
                    }
                }
                
                 {
                     step: 2,
                     iconCls: 'fa fa-home',
                     enableToggle: true,
                     text: 'Address'
                 },
                 {
                     step: 3,
                     iconCls: 'fa fa-heart',
                     enableToggle: true,
                     text: 'Finish'
                 }
                 
            ]
        };

        


        
        this.bbar = {
            reference: 'navigation-toolbar',
            margin: 8,
            items: [
                '->',
                {
                    text: 'Previous',
                    ui: this.colorScheme,
                    formBind: true,
                    bind: {
                        disabled: '{atBeginning}'
                    },
                    listeners: {
                        click: 'onPreviousClick'
                    }
                },
                {
                    text: 'Next',
                    ui: this.colorScheme,
                    formBind: true,
                    reference: 'nextbutton',
                    bind: {
                        disabled: '{atEnd}'
                    },
                    listeners: {
                        click: 'onNextClick'
                    }
                }
            ]
        };
        

        this.callParent();
    }
    */


});