Ext.define('MutrasstoApp.view.membre.MainMembrePresident', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainMembrePresident',
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
            xtype: 'liste-membre',
            margin: 10
        }]

    }, {
        title: 'Parent',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Les parents des membres'
        },
        items: [{
            xtype: 'liste-parent'
        }]
    }]


});