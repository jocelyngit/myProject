Ext.define('zonblewou.view.mesPages.parametre.sectActivite.SectActiviteListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'sectactiviteListe',

    title: 'LISTE DES SECTEURS D\'ACTIVITES',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.SecteurActivite',

        'zonblewou.view.mesPages.parametre.sectActivite.SectActiviteFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

    controller: 'sectactiviteform',

    store: {
        type: 'secteuractivite'
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
            dataIndex: 'secteurActivite',
            text: 'Secteur',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onSectActiviteEditAction'
                        /*

                                    //columns: [{ header: 'World' }], // One header just for show. There's no data,
                                    //store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
                                }
                            }).show();

                        }

                                */

                },
               /* {
                    xtype: 'button',

                    iconCls: 'x-fa fa-close',

                    tooltip: 'Supprimer',

                    handler: 'onSectActiviteDeleteAction'

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

});