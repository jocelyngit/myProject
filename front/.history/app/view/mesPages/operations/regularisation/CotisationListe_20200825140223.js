Ext.define('zonblewou.view.mesPages.operations.regularisation.CotisationListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'cotisationListe',

    title: 'REGULARISATIONS',

    //bodyPadding: 10,

    reference: 'cotisationGridRef',

    requires: [

        'zonblewou.store.mesStore.Cotisation',

        'zonblewou.view.mesPages.operations.regularisation.CotisationFormController'
    ],

    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                    xtype: 'textfield',
                    name: 'soldeDep',
                    fieldLabel: 'Reste à regler',
                    emptyText: 'Reste à regler',
                    readOnly: true,
                    id: 'resteAreglerItemId'

                },
                '-',
                {
                    xtype: 'button',
                    text: '<b>Régulariser</b>',
                    handler: 'onRegularisationBtnClick'
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

    controller: 'cotisationform',


    store: {
        type: 'cotisation'
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
        /*
          {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'id',
            text: 'Identifiant',
            //flex: 0.15,
            hidden: true
        },
        */

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
            text: 'IdentifiantCompte',
            //flex: 0.15,
            hidden: true
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
            flex: 1
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
            flex: 1,

            renderer: function(value) {
                return Ext.String.format('{0}  FCFA', value);
            }
        },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'mise',
            text: 'Mise',
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

                    iconCls: 'x-fa fa-close',

                    tooltip: 'Supprimer',

                    handler: 'onRegDeleteAction'

                }


            ],

            cls: 'content-column',
            width: 100,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'Actions '
        }

    ],

    //}]

});