Ext.define('zonblewou.view.controlleurView.operationcontrolleur.OperationsControlleur', {

    extend: 'Ext.tab.Panel',

    xtype: 'operationscontrolleur',

    layout: 'responsivecolumn',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'

    ],

    //controller: 'membrefomr',
    //viewModel: {
    //    type: 'searchresults'
    //},

    cls: 'shadow',
    activeTab: 0,
    margin: 10,

    items: [
        /*{
            title: 'Dépôt Marketeur',
            border: false,
            xtype: 'depotContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Dépôt de la somme totale de la collecte'
            }
        },

         */
        {
            title: 'Régularisation',
            border: false,
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Régularisation'
            },
            xtype: 'cotisationContainer',
        },
        /*{
            title: 'Régularisation Compte Marketeur',
            border: false,
            cls: 'wizardtwo shadow',
            //xtype: 'retraitContainer',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Régularisation des comptes des Marketeurs'
            }
        },

         */
        /*{
            title: 'Retrait',
            border: false,
            cls: 'wizardtwo shadow',
            xtype: 'retraitContainer',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Retrait zonblewou'
            }
        },

         */

    ]


});