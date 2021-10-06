Ext.define('MutrasstoApp.view.membrePage.membreAssistance.MainMembreAssistance', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainMembreAssistance',
    activeTab: 0,

    ui: 'navigation',

    requires: [
        'MutrasstoApp.view.assistance.DemandeAssistance'
        //'MutrasstoApp.view.session.SessionController'

    ],

    //controller: 'assistance',
    items: [{
        title: 'Assistance',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Demander une assistance'
        },
        items: [{
            xtype: 'formulaire-assistance'
        }]

    }, {
        title: 'Mes demandes',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Mes demandes'
        },
        // items: [{
        //    xtype: 'produit-formulaire-grid'
        //}]
    }]


});