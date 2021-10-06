Ext.define('zonblewou.view.mesPages.membres.Membres', {
    extend: 'Ext.tab.Panel',
    xtype: 'membre',

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
        title: 'Membres',
        border: false,
        //xtype: 'membreContainer',
        viewType: 'membreContainer',
        cls: 'wizardtwo shadow',
        colorScheme: 'soft-purple',
        userCls: 'big-50 small-100',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Membres Zonblewou'
        },
    }]
});