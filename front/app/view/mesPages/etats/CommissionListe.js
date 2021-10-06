

Ext.define('zonblewou.view.mesPages.etats.CommissionListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'commissionListe',

    //bodyPadding: 10,

    //reference: 'cotisationGridRef',

    stripeRows        : true,

    columnLines: true,

    style: 'padding: 20px',

    features: [{
        ftype: 'summary'
    }],

    requires: [

        'zonblewou.store.mesStore.Commission',

        'zonblewou.store.mesStore.Mois',

        'Ext.grid.filters.filter.Base',

        'zonblewou.store.mesStore.AgentMarketing',

        'Ext.util.Format',

        'zonblewou.view.mesPages.etats.CommissionListeController'
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            bodyPadding : 10,
            items: ['-',
                /*'-',{

                    xtype: 'datefield',
                    emptyText: 'Date',
                    fieldLabel: 'Date de cotisation',
                    labelAlign: 'left',
                    //allowBlank: false,
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
                        change: 'onDateFieldOfListeCotisationChange'
                    }

                },
                '-',

                 */
                {
                    xtype: 'combo',
                    fieldLabel: 'Mois',
                    //labelAlign: 'left',
                    reference : 'moisComboComListeRef',
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
                        select : 'onMoisComboSelectComListe'
                    }
                },
                '-',
                {
                    xtype: 'combo',
                    fieldLabel: 'Agent',
                   // labelAlign: 'left',
                    reference : 'agentComboComListeRef',
                    forceSelection: true,
                    emptyText: '-- Selectionner --',
                    disabled : true,
                    store: {
                        type: 'agentmarketing',
                        autoLoad: true
                    },

                    queryMode: 'local',
                    //displayField: 'nomMembre',
                    valueField: 'id',
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
                        select : 'onAgentComboSelectComListe',

                    }
                },

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
                    handler : 'onBtnCommissionListeReset'
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
                        click: 'onBtnCommissionListePrint'
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


    controller: 'commissionliste',

    //store : Ext.data.StoreManager.lookup('allcotisationStoreId'),
    store: {
       type: 'commission'

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
           /* {
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'idCompte',
                text: 'Id Compte',
                flex: 0.5,
                hidden: true
            },

            */
            /*{
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'idUser',
                text: 'IdentifiantUser',
                //flex: 0.15,
                hidden: true
            },*/
            /*{
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

             */
            {
                xtype: 'templatecolumn',
                cls: 'content-column',
                tpl: '{nomMembre} {prenomMembre}',
                text: 'MEMBRE',
                flex: 1
            },
            {
                xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'dateCommission',
                text: 'DATE DE COMMISSION',
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
                dataIndex: 'montantCommission',
                text: 'COMMISSION',
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
            /*{
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'mise',
                text: 'Mise',
                //width: 150,
                flex: 0.5,

                renderer: function(value) {
                    var format = "0,000";

                    Ext.util.Format.thousandSeparator = ".";

                    Ext.util.Format.decimalSeparator  = ",";

                    return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));
                }
            },

             */

            {
                xtype: 'templatecolumn',
                cls: 'content-column',
                tpl: '{nomAg} {prenomAg}',
                text: 'AGENT',
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

        ]
        // plugins: [{ ptype: "gridFilter" }]

    //}]

});