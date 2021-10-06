Ext.define('zonblewou.view.mesPages.etats.EtatListeCotisation', {

    extend: 'Ext.grid.Panel',

    xtype: 'etatListeCotisation',

    //bodyPadding: 10,

    //reference: 'cotisationGridRef',

    requires: [

        // 'zonblewou.store.mesStore.Cotisation',

        'zonblewou.view.mesPages.etats.ListeCotisationController'
    ],

    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                    xtype: 'textfield',
                    name: 'soldeDep',
                    fieldLabel: 'Reste à regler',
                    emptyText: 'Reste à regler',
                    //readOnly: true,
                    // id: 'resteAreglerItemId'

                },
                '-',
                {
                    xtype: 'button',
                    text: '<b>Régulariser</b>',
                    handler: 'onRegularisationBtnClick'
                },
                '->',
                {
                    xtype: 'button',
                    text: '<b>Effacer</b>',
                    handler: 'onRegEffacerBtnClick'
                }
            ]
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

    controller: 'listecotisationcontroller',


    //store: {
    //   type: 'cotisation'
    // },


    //viewModel: {
    //    type: 'searchresults'
    //},

    //cls: 'shadow',
    //activeTab: 0,
    //margin: 20,

    //items: [{
    //xtype: 'gridpanel',
    cls: 'user-grid',
    title: 'LISTE DES COTISATIONS',
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
            dataIndex: 'idMembre',
            text: 'IdentifiantMembre',
            //flex: 0.15,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'idCompte',
            text: 'Id Compte',
            flex: 0.5,
            //hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'idUser',
            text: 'IdentifiantUser',
            //flex: 0.15,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'numCompte',
            text: 'Numéro de compte',
            flex: 0.75
        },
        {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'dateCotisation',
            text: 'Date de cotisation',
            flex: 1,
            format: 'd/m/Y'

        },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'montantCotisation',
            text: 'Montant cotisé',
            //flex: 1,
            width: 150,

            renderer: function(value) {
                return Ext.String.format('{0}  FCFA', value);
            }
        },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'mise',
            text: 'Mise',
            width: 150,

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
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomAg} {prenomAg}',
            text: 'Marketeur',
            flex: 1
        }

    ]

    //}]

});