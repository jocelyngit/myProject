Ext.define('zonblewou.view.mesPages.etats.EtatListeCotisation', {

    extend: 'Ext.grid.Panel',

    xtype: 'etatListeCotisation',

    //bodyPadding: 10,

    //reference: 'cotisationGridRef',

    requires: [

        'zonblewou.store.mesStore.AllCotisation',

        'Ext.grid.filters.Filters',

        //'Ext.ux.grid.GridFilter',

        'zonblewou.view.mesPages.etats.ListeCotisationController'
    ],

    dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                /*{

                    xtype: 'datefield',
                    emptyText: 'Date',
                    fieldLabel: 'Date de cotisation',
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

                    submitFormat: 'Y/m/d'

                    //submitFormat: 'Y/m/d H:i:s'
                },
                */
                /*
                  {
                    xtype: 'searchtrigger',
                    autoSearch: true
                },
                */

                /*
                  '-',
                 {
                     xtype: 'button',
                     text: '<b>Régulariser</b>',
                     handler: 'onRegularisationBtnClick'
                 },
                */

                /**'->',
                {
                    xtype: 'button',
                    text: '<b>Effacer</b>',
                    handler: 'onRegEffacerBtnClick'
                }
                **/
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            //store: zonblewou.store.mesStore.AllCotisation,
            itemId: 'userPaginationToolbar',
            displayInfo: true,
            //bind: '{usersResults}'
        }
    ],

    controller: 'listecotisationcontroller',


    store: {
        type: 'allcotisation',
        remoteSort: true,
        remoteFilter: true
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
    title: 'LISTE DES COTISATIONS',
    plugins: 'gridfilters',
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
            /*{
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'idUser',
                text: 'IdentifiantUser',
                //flex: 0.15,
                hidden: true
            },*/
            {
                xtype: 'gridcolumn',
                cls: 'content-column',
                dataIndex: 'numCompte',
                text: 'Numéro de compte',
                width: 150
            },
            {
                xtype: 'datecolumn',
                cls: 'content-column',
                dataIndex: 'dateCotisation',
                text: 'Date de cotisation',
                width: 150,
                format: 'd/m/Y',
                filter: true,
                filter: {
                    type: 'date',

                    // optional picker config
                    pickerDefaults: {
                        // any DatePicker configs
                    }
                }

            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'montantCotisation',
                text: 'Montant cotisé',
                //flex: 1,
                width: 150,

                renderer: function(value) {
                    return Ext.String.format('{0}  FCFA', value);
                }
            },
            {
                xtype: 'numbercolumn',
                cls: 'content-column',
                dataIndex: 'mise',
                text: 'Mise',
                width: 150,

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
                        // any Ext.form.field.Text configs accepted
                    }
                }
            }

        ]
        // plugins: [{ ptype: "gridFilter" }]

    //}]

});