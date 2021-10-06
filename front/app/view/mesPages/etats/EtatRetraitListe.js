Ext.define('zonblewou.view.mesPages.etats.EtatRetraitListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'etatRetraitListe',

    //title: 'RETRAIT',

    //bodyPadding: 10,

    stripeRows        : true,

    columnLines: true,

    style: 'padding: 20px',

    features: [{
        ftype: 'summary'
    }],

   // reference: 'retraitGridRef',

    requires: [

        'zonblewou.store.mesStore.EtatRetrait',

        'zonblewou.store.mesStore.Mois',

        'Ext.grid.filters.filter.Base',

        //'zonblewou.store.mesStore.Utilisateur',

        'Ext.util.Format',

        'zonblewou.view.mesPages.etats.ListeRetraitController'
    ],

    /*dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

     */

    controller: 'listeretraitcontroller',


    store: {
       type: 'etatretrait'
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            bodyPadding : 10,
            items: [
                '-',{

                    xtype: 'datefield',
                    emptyText: 'Date',
                    fieldLabel: 'Date de retrait',
                    labelAlign: 'left',
                    //allowBlank: false,
                    reference: 'dateEtatRetraitRef',
                    name: 'dateOperation',
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
                        change: 'onDateFieldOfEtatRetraitChange'
                    }

                },
                '-',

                {
                    xtype: 'combo',
                    fieldLabel: 'Mois',
                    labelAlign: 'left',
                    reference : 'moisComboEtatRetraitRef',
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
                        select : 'onEtatRetraitComboMoisSelect'
                    }
                },
                '-',
               /* {
                    xtype: 'combo',
                    fieldLabel: 'Opérateur',
                    labelAlign: 'left',
                    reference : 'operateurComboEtatRetraitRef',
                    forceSelection: true,
                    emptyText: '-- Selectionner --',
                    disabled : true,
                    store: {
                        type: 'utilisateur',
                        autoLoad: true
                    },

                    queryMode: 'local',
                    //displayField: 'nomMembre',
                    valueField: 'id' ,
                    editable: false,
                    msgTarget: 'side',

                    tpl: Ext.create('Ext.XTemplate',
                        '<ul class="x-list-plain"><tpl for=".">',
                        '<li role="option" class="x-boundlist-item">{nomUser} {prenomUser}</li>',
                        '</tpl></ul>'
                    ),
                    // template for the content inside text field
                    displayTpl: Ext.create('Ext.XTemplate',
                        '<tpl for=".">',
                        '{nomUser} {prenomUser}',
                        '</tpl>'
                    ),
                    listeners: {
                        select : 'onEtatRetraitComboOperateurSelect',

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
                    handler : 'onBtnEtatRetraitReset'
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
                        click: 'onBtnEtatRetraitPrint'
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
            //text: '#'
        },

          {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'id',
            text: 'IDENTIFIANT',
            //flex: 0.15,
            hidden: true
        },
        /*
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

         */
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'idUser',
            text: 'ID UTILISATEUR',
            //flex: 0.15,
            hidden: true
        },


        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'numCompte',
            text: 'NUMERO DE COMPTE',
            flex: 1
        },
        {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'dateOperation',
            text: 'DATE D\'OPERATION',
            flex: 1,
            format: 'd/m/Y'

        },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'montantOperation',
            text: 'MONTANT ',
            width : 125,
            //flex: 1,

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
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomMembre} {prenomMembre}',
            text: 'TITULAIRE',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'typeOperation',
            text: 'OPERATION',
            //flex: 1
            width : 125,
        },
        /*{
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: 'RETRAIT',
            text: 'TYPE D\'OPERATION',
            flex: 1
        },

         */
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'typeOpp',
            text: 'OPPORTUNITE',
            flex: 1,
            renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                //console.log(value);
                if (value === "oct") {
                    return "COURT TERME";
                } else if (value === "omt") {
                    return "MOYEN TERME";
                } else if (value === "olt") {
                    return "LONG TERME";
                }

            }
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'personneAgissant',
            text: 'PERSONNE AGISSANT',
            flex: 1,
            renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                //console.log(value);
                if (value === "LUI-MÊME") {
                    return "LUI-MÊME";
                } else if (value === "AUTRES PERSONNES") {
                    return  record.get('nomPagissant') + " " + record.get('prenomPagissant') + " " + record.get('telPagissant') ;
                }

            }
        },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: '{nomUser} {prenomUser}',
            text: 'OPERATEUR',
            flex: 1
        },

    ],

    //}]

});