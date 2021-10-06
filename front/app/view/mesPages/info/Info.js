Ext.define('zonblewou.view.mesPages.info.Info', {

    extend: 'Ext.tab.Panel',

    xtype: 'info',

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
        title: 'Montant par Mise',
        border: false,
        //xtype: 'profilContainer',
        cls: 'wizardtwo shadow',
        colorScheme: 'soft-purple',
        userCls: 'big-50 small-100',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Montant d\"une mise par mois'
        }
    }]


});