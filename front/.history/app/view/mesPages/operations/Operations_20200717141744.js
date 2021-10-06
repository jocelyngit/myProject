Ext.define('zonblewou.view.mesPages.operations.Operations', {

    extend: 'Ext.tab.Panel',

    xtype: 'operations',

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

    items: [{
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
        {
            title: 'Retrait',
            border: false,
            cls: 'wizardtwo shadow',
            xtype: 'retraitFormulaire',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Retrait zonblewou'
            }
        },

    ]


});