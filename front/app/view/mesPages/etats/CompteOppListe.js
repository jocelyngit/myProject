Ext.define('zonblewou.view.mesPages.etats.CompteOppListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'compteoppListe',

    //title: 'INFORMATION DES OPPORTUINITES',

    //reference: 'profilGridRef',

    stripeRows        : true,

    columnLines: true,

    style: 'padding: 20px',

    features: [{
        ftype: 'summary'
    }],

    requires: [

        'zonblewou.store.mesStore.CompteOpp',

        'zonblewou.view.mesPages.etats.CompteOppController'

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
                       click: 'onBtnListeCompteOppPrint'
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

    controller: 'compteopp',


    store: {
        type: 'compteopp'
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
            dataIndex: 'idMembre',
            text: 'Id Membre',
            //flex: 0.15,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'idCompte',
            text: 'Id Compte',
            //flex: 0.5,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'numCompte',
            text: 'NUMERO DE COMPTE',
            //width: 150,
            flex: 0.8,
            //filter: true,
            //filter: {
            //   xtype: 'textfield'
            //}
        },
            {
                xtype: 'templatecolumn',
                cls: 'content-column',
                tpl: '{nomMembre} {prenomMembre}',
                text: 'PROPRIETAIRE',
                flex: 1
            },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'solde',
            text: 'SOLDE',
            flex: 1,

            renderer: function(value) {

                var format = "0,000";

                Ext.util.Format.thousandSeparator = ".";

                Ext.util.Format.decimalSeparator  = ",";

                return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));


            },
            summaryType: 'sum',

            summaryRenderer : function (value) {
                var format = "0,000";

                Ext.util.Format.thousandSeparator = ".";

                Ext.util.Format.decimalSeparator  = ",";

                return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));
            }
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
                },
                summaryType: 'sum',

                summaryRenderer : function (value) {
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



                },
                summaryType: 'sum',

                summaryRenderer : function (value) {
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



                },
                summaryType: 'sum',

                summaryRenderer : function (value) {
                    var format = "0,000";

                    Ext.util.Format.thousandSeparator = ".";

                    Ext.util.Format.decimalSeparator  = ",";

                    return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));
                }
            }

        ]
        //}]

});