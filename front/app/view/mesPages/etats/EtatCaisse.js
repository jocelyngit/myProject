

Ext.define('zonblewou.view.mesPages.etats.EtatCaisse', {

    extend: 'Ext.grid.Panel',

    xtype: 'etatCaisse',

    //bodyPadding: 10,

    //reference: 'cotisationGridRef',

    stripeRows        : true,

    columnLines: true,

    style: 'padding: 20px',

    features: [{
        ftype: 'summary'
    }],

    requires: [

        'zonblewou.store.mesStore.Caisse',

        //'zonblewou.store.mesStore.Mois',

        'Ext.grid.filters.filter.Base',

        //'zonblewou.store.mesStore.AgentMarketing',

        'Ext.util.Format',

        'zonblewou.view.mesPages.etats.ListeCotisationController'
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            bodyPadding : 10,
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
                        click: 'onBtnEtatCaissePrint'
                    }
                }

            ]
        },
        /*{
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            //store: zonblewou.store.mesStore.AllCotisation,
            itemId: 'userPaginationToolbar',
            displayInfo: true,
            //bind: '{usersResults}'
        }

         */
    ],

    controller: 'etatcaissecontroller',

    //store : Ext.data.StoreManager.lookup('allcotisationStoreId'),
    store: {
       type: 'caisse'

   },
    //plugins: 'gridfilters',


    //viewModel: {
    //    type: 'searchresults'
    //},

    //cls: 'shadow',
    //activeTab: 0,
    //margin: 20,

    //items: [{
    //xtype: 'gridpanel',
    cls: 'user-grid',
    title: 'SITUATION ACTUELLE DE LA CAISSE ZOMBLEWOU',
    //routeId: 'user',
    //bind: '{usersResults}',
    //scrollable: false,
    columns: [
        /*{
                xtype: 'rownumberer',
                width: 40,
                //dataIndex: 'identifier',
                text: '#'
            },
            */
            {
                xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'dateOfRequest',
                text: 'DATE',
                // width: 150,
                flex: 1,
                format: 'd/m/Y H:i:s',

                //filter: true,
                /*filter: {
                type: 'date',
                    // optional picker config
                    pickerDefaults: {
                        // any DatePicker configs
                    }
                }
                */

            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'totalCompte',
                text: 'TOTAL COMPTE',
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
                dataIndex: 'totalOct',
                text: 'TOTAL O.C.T.',
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
            dataIndex: 'totalOmt',
            text: 'TOTAL O.M.T.',
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
            dataIndex: 'totalOlt',
            text: 'TOTAL O.L.T.',
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

        /*
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
                flex: 1,
                filter: {
                    // required configs
                    type: 'string',
                    // optional configs
                    //value: 'star',  // setting a value makes the filter active.
                    itemDefaults: {
                        //empyText: 'Rechercher ...'
                        // any Ext.form.field.Text configs accepted
                    }
                }
            }

            */

        ]
        // plugins: [{ ptype: "gridFilter" }]

    //}]

});