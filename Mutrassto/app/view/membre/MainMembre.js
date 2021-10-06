Ext.define('MutrasstoApp.view.membre.MainMembre', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainMembre',
    activeTab: 0,

    ui: 'navigation',

    requires: [
        'MutrasstoApp.view.membre.MembreController'
    ],

    controller: 'membre',

    items: [{
        title: 'Membre',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Les membres'
        },
        items: [{
            xtype: 'membreFormulaireGridHbox',
            margin: 10
        }]

    }, {
        title: 'Parent',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Les parents des membres'
        },
        items: [{
            xtype: 'parentFormulaireGrid'
        }]
    }]


});