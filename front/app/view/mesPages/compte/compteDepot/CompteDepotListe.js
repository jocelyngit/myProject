Ext.define('zonblewou.view.mesPages.compte.compteDepot.CompteDepotListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'compteDepotListe',

    title: 'LISTE DES COMPTES DE DEPÔT',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.CompteDeDepot',

        'zonblewou.view.mesPages.compte.compteDepot.CompteDepotFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: true,
    }],

    controller: 'comptedepotform',

    store: {
        type: 'comptededepot'
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
            dataIndex: 'numCompteDep',
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
            dataIndex: 'soldeDep',
            text: 'Solde',
            flex: 1,

            renderer: function(value) {
                return Ext.String.format('{0}  FCFA', value);
            }
        },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomAg} {prenomAg}',
            text: 'Agent',
            flex: 1
        }

        /*
          {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onCompteDepotEditAction'
                },


            ],

            cls: 'content-column',
            width: 120,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'Actions '
        }
        */

    ],

    //}]

});