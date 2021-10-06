Ext.define('zonblewou.view.mesPages.parametre.utilisateur.UserListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'userListe',

    title: 'LISTE DES UTILISATEURS',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.User',

        'zonblewou.view.mesPages.parametre.utilisateur.UserFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true
            //bind: '{usersResults}'
    }],

    controller: 'userform',


    store: {
        type: 'user'
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
    //routeId: 'user',
    //bind: '{usersResults}',
    //scrollable: false,
    columns: [{
            xtype: 'rownumberer',
            width: 40,
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
            tpl: '{nomUser} {prenomUser}',
            text: 'Utilisateur',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'telUser',
            text: 'Téléphone',
            flex: 0.7
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'profil',
            text: 'Profil',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'agence',
            text: 'Agence',
            flex: 0.7
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'login',
            text: 'Login',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'password',
            text: 'Mot de passe',
            flex: 1,
            hidden: true
        },
        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onUserEditAction'
                },
                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-ban',

                    tooltip: 'Détails'
                }
            ],

            cls: 'content-column',
            width: 120,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'Actions'
        }
    ],

    //}]

});