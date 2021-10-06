Ext.define('zonblewou.view.mesPages.compte.CompteListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'compteListe',

    title: 'LISTE DES COMPTES ZOMBLEWOU',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Compte',

        'zonblewou.view.mesPages.compte.CompteFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

    controller: 'compteform',


    store: {
        type: 'compte'
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
            dataIndex: 'numCompte',
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
            dataIndex: 'solde',
            text: 'Solde',
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
        }

        /*
          {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onCompteEditAction'
                }


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