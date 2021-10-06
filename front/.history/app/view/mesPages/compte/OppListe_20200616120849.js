Ext.define('zonblewou.view.mesPages.compte.OppListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'oppListe',

    title: 'INFORMATION DES OPPORTUINITES',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Opportunite',

        'zonblewou.view.mesPages.compte.OppFormController'

    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

    controller: 'oppform',


    store: {
        type: 'opportunite'
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
                flex: 1,
                hidden: true
            },
            {
                xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'dateCreation',
                text: 'Date de création',
                flex: 1,
                format: 'd/m/Y',

                hidden: true

                /*
                  renderer: function(value) {
                return Ext.Date.format(value, 'd/m/Y');
                }
                */

            },

            {
                xtype: 'templatecolumn',
                cls: 'content-column',
                tpl: '{nomAg} {prenomAg}',
                text: 'Propriétaire',
                flex: 1
            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'soldeDep',
                text: 'OCT',
                flex: 1,

                renderer: function(value) {
                    return Ext.String.format('{0}  FCFA', value);
                }
            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'soldeDep',
                text: 'OMT',
                flex: 1,

                renderer: function(value) {
                    return Ext.String.format('{0}  FCFA', value);
                }
            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'soldeDep',
                text: 'OLT',
                flex: 1,

                renderer: function(value) {
                    return Ext.String.format('{0}  FCFA', value);
                }
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
                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-close',

                    tooltip: 'Supprimer',

                    handler: 'onCompteDepotDeleteAction'
                },

                {
                    xtype: 'button',

                    iconCls: 'x-fa fa-ban',

                    tooltip: 'Détails',

                    handler: 'onCompteDepotDetailAction'

                }


            ],

            cls: 'content-column',
            width: 120,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'Actions '
        }
   
       */


        ]
        //}]

});