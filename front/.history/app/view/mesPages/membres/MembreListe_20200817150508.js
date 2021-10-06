Ext.define('zonblewou.view.mesPages.membres.membreListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'membreListe',

    title: 'LISTE DES MEMBRES',

    requires: [
        'zonblewou.store.mesStore.Membre',

        'Ext.toolbar.Paging',
        'Ext.grid.column.Date',

        'Ext.toolbar.Toolbar',
        'Ext.grid.column.Column',

    ],

    dockedItems: [{

            xtype: 'toolbar',
            dock: 'top',
            //ui: 'header',
            defaults: { cls: 'btn-orange' },
            items: [{
                xtype: 'button',
                //iconCls: 'x-fa fa-plus',
                text: '<b>Ajouter</b>',
                handler: 'onMembreBtnAjouter'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            //bind: '{usersResults}'
        }
    ],


    controller: 'membreform',

    store: {
        type: 'membre'
    },

    //viewModel: {
    //    type: 'searchresults'
    //},

    cls: 'shadow',
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
            flex: 0.7,
            //width: 120,
            dataIndex: 'numeroMembre',
            text: 'Numéro Membre'
        },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomMembre} {prenomMembre}',
            text: 'Membre',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            flex: 0.7,
            //width: 120,
            dataIndex: 'telMembre',
            text: 'Téléphone'
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            flex: 0.4,
            //width: 120,
            dataIndex: 'mise',
            text: 'Mise'
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            flex: 0.4,
            //width: 120,
            dataIndex: 'dureeProjet',
            text: 'Durée'
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            flex: 1,
            //width: 120,
            dataIndex: 'projetAvenir',
            text: 'Projet'
        },
        {
            xtype: 'datecolumn',
            cls: 'content-column',
            width: 120,
            dataIndex: 'dateAdhesion',
            text: 'Date Adhésion'
        },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomAgent} {prenomAgent}',
            text: 'Agent',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    handler: 'onEditMembreAction'
                },
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-ban',
                    handler: 'onShowMembreAction'
                }
            ],

            cls: 'content-column',
            width: 120,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'edit '
        }
    ],


    /*
      
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }]
    */


    //}]

});