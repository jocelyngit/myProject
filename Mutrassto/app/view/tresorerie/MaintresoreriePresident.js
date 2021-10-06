Ext.define('MutrasstoApp.view.tresorerie.MainTresoreriePresident', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainTresoreriePresident',
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

    }]


});