Ext.define('zonblewou.view.mesPages.parametre.zone.ZoneListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'zoneListe',

    title: 'LISTE DES ZONES',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Zone',

        'zonblewou.view.mesPages.parametre.zone.ZoneFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

    controller: 'zoneform',

    store: {
        type: 'zone'
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
            dataIndex: 'zone',
            text: 'Zone',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'zoneTel',
            text: 'Téléphone',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onZoneEditAction'
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

                    handler: 'onZoneDeleteAction'

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