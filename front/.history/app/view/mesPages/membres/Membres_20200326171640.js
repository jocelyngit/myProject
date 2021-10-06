Ext.define('zonblewou.view.mesPages.membres.Membres', {
    extend: 'Ext.tab.Panel',
    xtype: 'membre',

    layout: 'responsivecolumn',

    requires: [
        //'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.ux.layout.ResponsiveColumn'
        //'Ext.grid.column.Date'
    ],

    controller: 'searchresults',
    viewModel: {
        type: 'searchresults'
    },

    cls: 'shadow',
    activeTab: 0,
    margin: 10,

    items: [

        // création de l'instance membreFormulaire
        {
            title: 'Membres',
            border: false,
            xtype: 'membreContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Membres Zonblewou'
            },
        }
    ]
});