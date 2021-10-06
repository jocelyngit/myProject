Ext.define('zonblewou.view.mesPages.etats.Etat', {

    extend: 'Ext.tab.Panel',

    xtype: 'etat',

    layout: 'responsivecolumn',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'zonblewou.view.mesPages.etats.EtatListeCotisation',
        'zonblewou.view.mesPages.etats.ListeCotisationController'

    ],

    //controller: 'membrefomr',
    //viewModel: {
    //    type: 'searchresults'
    //},

    cls: 'shadow',
    activeTab: 0,
    margin: 10,

    items: [{
        title: 'Liste des cotisations',
        border: false,
        xtype: 'etatListeCotisation',
        cls: 'wizardtwo shadow',
        colorScheme: 'soft-purple',
        userCls: 'big-50 small-100',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Listes des cotisations'
        }
    }]


});