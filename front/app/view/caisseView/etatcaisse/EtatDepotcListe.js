

Ext.define('zonblewou.view.caisseView.etatcaisse.EtatDepotcListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'etatDepotcListe',

    //bodyPadding: 10,

    //reference: 'cotisationGridRef',

    stripeRows        : true,

    columnLines: true,

    style: 'padding: 20px',

    features: [{
        ftype: 'summary'
    }],

    requires: [

        'zonblewou.store.mesStore.Depot',

        'zonblewou.store.mesStore.Mois',

        'Ext.grid.filters.filter.Base',

        //'zonblewou.store.mesStore.AgentMarketing',

        'Ext.util.Format',

        'zonblewou.view.mesPages.etats.DepotController'
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            bodyPadding : 10,
            items: [
                '-',{

                    xtype: 'datefield',
                    emptyText: 'Date',
                    fieldLabel: 'Date de dépôt',
                    labelAlign: 'left',
                    //allowBlank: false,
                    reference: 'dateDepotListeRef',
                    name: 'dateCotisation',
                    //blankText: 'Ce champ est obligatoire',
                    //msgTarget: 'side',

                    editable: false,
                    //readOnly: true,

                    maxValue: new Date(),

                    //minValue: new Date(),

                    //value: new Date(),

                    format: 'd/m/Y',

                    submitFormat: 'Y/m/d',

                    //submitFormat: 'Y/m/d H:i:s'

                    //listners
                    listeners: {
                        change: 'onDateOfListeDepotcChange'
                    }

                },
                '-',

                {
                    xtype: 'combo',
                    fieldLabel: 'Mois',
                    labelAlign: 'left',
                    reference : 'moisComboDepotcRef',
                    forceSelection: true,
                    emptyText: '-- Selectionner --',
                    store: {
                        type: 'mois',
                        autoLoad: true
                    },

                    queryMode: 'local',
                    displayField: 'mois',
                    valueField: 'code' ,
                    editable: false,
                    msgTarget: 'side',

                    listeners: {
                        select : 'onComboMoisDepotcSelect'
                    }
                },
                '-',
                /*{
                    xtype: 'combo',
                    fieldLabel: 'Agent',
                    labelAlign: 'left',
                    reference : 'agentComboDepotRef',
                    forceSelection: true,
                    emptyText: '-- Selectionner --',
                    disabled : true,
                    store: {
                        type: 'agentmarketing',
                        autoLoad: true
                    },

                    queryMode: 'local',
                    //displayField: 'nomMembre',
                    //valueField:  ,
                    editable: false,
                    msgTarget: 'side',

                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">{nomAg} {prenomAg}</li>',
                        '</tpl></ul>'
                    ),
                    // template for the content inside text field
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '{nomAg} {prenomAg}',
                        '</tpl>'
                    ),
                    listeners: {
                        select : 'onAgentComboDepotSelect',

                    }
                },

                 */

                '->',
                {
                    xtype: 'button', //#27
                    //formBind: true, //#28
                    //iconCls: 'fa fa-sign-in fa-lg',
                    //text: 'Submit'
                    iconCls: 'fa fa-close',
                    text: 'Restaurer',
                    //glyph: Packt.util.Glyphs.getGlyph('print'),
                    //listeners: {
                    //click: 'onBtnCommissionListePrint'
                    //}
                    handler : 'onBtnDepotcListeReset'
                },
                '-',
                {
                    xtype: 'button', //#27
                    //formBind: true, //#28
                    //iconCls: 'fa fa-sign-in fa-lg',
                    //text: 'Submit'
                    iconCls: 'fa fa-print',
                    text: 'Imprimer',
                    //glyph: Packt.util.Glyphs.getGlyph('print'),
                    listeners: {
                        click: 'onBtnListeDepotcPrint'
                    }
                }


                /*
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

                 */

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

    controller: 'depotccontroller',

    //store : Ext.data.StoreManager.lookup('allcotisationStoreId'),
    store: {
       type: 'depot'

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
                text: 'Id Membre',
                //flex: 0.15,
                hidden: true
            },
            {
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'idCompte',
                text: 'Id Compte',
                flex: 0.5,
                hidden: true
            },

            {
                xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'dateDepot',
                text: 'DATE DE DEPOT',
                // width: 150,
                flex: 0.6,
                format: 'd/m/Y',
                filterable: true
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
                dataIndex: 'montantDepot',
                text: 'MONTANT DEPOSE',
                flex: 0.5,
                //width: 150,

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
            dataIndex: 'resteDepot',
            text: 'MONTANT RESTANT',
            flex: 0.5,
            //width: 150,

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
            },
            hidden: true
        },
            {
                xtype: 'templatecolumn',
                cls: 'content-column',
                tpl: '{nomAg} {prenomAg}',
                text: 'AGENT',
                flex: 1,

            },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: 'DEPÔT',
            text: 'OPERATION',
            flex: 1
        },
        {
               xtype: 'gridcolumn',
               cls: 'content-column',
               dataIndex: 'login',
               text: 'OPERATEUR',
               flex: 0.5,
               //hidden: true
           }

        ]

    //}]

});