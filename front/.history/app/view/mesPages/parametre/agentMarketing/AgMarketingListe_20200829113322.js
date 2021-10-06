Ext.define('zonblewou.view.mesPages.parametre.agentMarketing.AgMarketingListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'agentMarketingListe',

    title: 'LISTE DES AGENTS MARKETING',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.AgentMarketing',

        'zonblewou.view.mesPages.parametre.agentMarketing.AgMarketingFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

    controller: 'agmarketingform',


    store: {
        type: 'agentmarketing'
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
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomAg} {prenomAg}',
            text: 'Agent',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'telAg',
            text: 'Téléphone',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'adresseAg',
            text: 'Adresse',
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
            dataIndex: 'agence',
            text: 'Agence',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onAgMarketingEditAction'
                },
                /*
                 {
                     xtype: 'button',

                     iconCls: 'x-fa fa-close',

                     tooltip: 'Supprimer',

                     handler: 'onAgMarketingDeleteAction'
                 },
                                  {
                     xtype: 'button',

                     iconCls: 'x-fa fa-ban',

                     tooltip: 'Détails',

                     handler: 'onAgMarketingDetailAction'

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