Ext.define('MutrasstoApp.view.tresorerie.MainTresorerie', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainTresorerie',
    activeTab: 0,

    ui: 'navigation',

    requires: [
        //'MutrasstoApp.view.trssorerie.entree',
        //'MutrasstoApp.view.session.SessionController'

    ],

    controller: 'tresorerie',
    items: [{
        title: 'Opération',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Opération'
        },
        //items: [{
        //  xtype: 'session-formulaire-grid'
        //}]

    }, {
        title: 'Cotisation mensuelle',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Cotisation mensuelle'
        }
    }, {
        title: 'Adhésion',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Adhésion'
        }
    }, {
        title: 'Etats',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Les états'
        }
    }]


});