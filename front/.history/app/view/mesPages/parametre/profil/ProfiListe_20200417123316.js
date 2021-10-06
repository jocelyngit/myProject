import data from '../../../../../ext/modern/theme-neptune/resources/images/pictos/data.png';
Ext.define('zonblewou.view.mesPages.parametre.profil.ProfiListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'profiListe',

    title: 'LISTE DES PROFILS',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Profil',

        'zonblewou.view.mesPages.parametre.profil.ProfilFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

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

                    handler: function(grid, rowIndex, colIndex) {

                        var rec = grid.getStore().getAt(rowIndex);

                        Ext.create('Ext.window.Window', {

                            title: 'MODIFICATION',
                            //height: 200,
                            width: 400,

                            controller: 'profilform',
                            //maximizable: true,
                            layout: 'fit',

                            //closable: true,

                            /*
                              
                            tools:[{ //Step 3
                                type:'close',
                                tooltip: 'Fermèture de la fenêtre...',
                                handler: function(event, toolEl, panelHeader) {
                                var cmpx=panelHeader.up('window');
                                
                                
                                  if (cmpx.collapsed){
                                cmpx.expand();
                                }
                                
                                
                            }
                            }]
                            */

                            items: { // Let's put an empty grid in just to illustrate fit layout
                                xtype: 'form',

                                defaults: {
                                    labelWidth: 90,
                                    labelAlign: 'top',
                                    labelSeparator: '',
                                    submitEmptyText: false,
                                    width: '100%'
                                },
                                margin: 15,
                                //bodypadding: 10,
                                defaultType: 'textfield',
                                reference: 'profilFormModifRef',
                                //anchor: '100%',
                                border: false,

                                items: [{
                                        xtype: 'hiddenfield',
                                        name: 'id',
                                        value: rec.get('id')
                                    },
                                    {
                                        emptyText: 'Profil',
                                        allowBlank: false,
                                        name: 'profil',
                                        blankText: 'Ce champ est obligatoire',
                                        vtype: 'alpha',
                                        msgTarget: 'side',
                                        value: rec.get('profil')
                                    },
                                    {
                                        xtype: 'button',
                                        reference: 'btnModifProfilRef',
                                        scale: 'small',
                                        ui: 'soft-green',
                                        iconAlign: 'left',
                                        iconCls: 'x-fa fa-edit',
                                        text: 'Modifier',
                                        formBind: true,

                                        listeners: {
                                            click: 'onModifProfilButtonClick'
                                        }

                                    }
                                ],

                                //columns: [{ header: 'World' }], // One header just for show. There's no data,
                                //store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
                            }
                        }).show();

                    }

                },
                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-close',

                    tooltip: 'Supprimer',

                    /*
                      listeners: {
                        click: 'onDeleletProfilButtonClick'
                    },
                    */


                    handler: function(grid, rowIndex, colIndex) {
                        //Ext.Msg.alert('Alert..!', "you can't send news...!");

                        var rec = grid.getStore().getAt(rowIndex);

                        var data = rec.data;

                        console.log(data);

                        //data.remove();

                        grid.getStore().load();

                        // message de confirmation
                        //Ext.MessageBox.show({

                        // title: 'SUPPRESSION',

                        //msg: 'Voulez-vous supprimer cet enregistrement ?',
                        //buttons: Ext.MessageBox.YESNO,
                        //buttons: Ext.MessageBox.YESNO,

                        //fn: function(button) {

                        //if ('yes' == button) {

                        // console.log(button);

                        /*
                          Requete Ext Jsonp 
                        */

                        /*
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

                            success: function() {

                                console.log(response);

                                if (response['error'] == false) {
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

                        //}
                        // },
                        // icon: Ext.MessageBox.QUESTION
                        // });
                        */


                    }

                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-ban',
                    tooltip: 'Détails',
                    handler: function(grid, rowIndex, colIndex) {

                        var rec = grid.getStore().getAt(rowIndex);

                        Ext.Msg.alert('Détails', "Id: " + rec.get('id') + " , Profil: " + rec.get('profil'));

                    }
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