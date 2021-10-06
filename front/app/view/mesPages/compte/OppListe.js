Ext.define('zonblewou.view.mesPages.compte.OppListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'oppListe',

    title: 'INFORMATION DES OPPORTUINITES',

    //reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Opportunite',

        'zonblewou.view.mesPages.compte.OppFormController'

    ],

   dockedItems: [
       {
           xtype: 'toolbar',
           dock: 'top',
           items: [
               '->',
               {
                   xtype: 'button', //#27
                   //formBind: true, //#28
                   //iconCls: 'fa fa-sign-in fa-lg',
                   //text: 'Submit'
                   iconCls: 'fa fa-print',
                   text: 'Imprimer',
                   //glyph: Packt.util.Glyphs.getGlyph('print'),
                   listeners: {
                       click: 'onBtnListeOppPrint'
                   }
               }],
       },
            {
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
                xtype: 'templatecolumn',
                cls: 'content-column',
                tpl: '{nomMembre} {prenomMembre}',
                text: 'Propriétaire',
                flex: 1
            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'oct',
                text: 'OCT',
                flex: 1,

                renderer: function(value) {

                    var format = "0,000";

                    Ext.util.Format.thousandSeparator = ".";

                    Ext.util.Format.decimalSeparator  = ",";

                    return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));



                }
            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'omt',
                text: 'OMT',
                flex: 1,

                renderer: function(value) {

                    var format = "0,000";

                    Ext.util.Format.thousandSeparator = ".";

                    Ext.util.Format.decimalSeparator  = ",";

                    return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));



                }
            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'olt',
                text: 'OLT',
                flex: 1,

                renderer: function(value) {

                    var format = "0,000";

                    Ext.util.Format.thousandSeparator = ".";

                    Ext.util.Format.decimalSeparator  = ",";

                    return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));



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