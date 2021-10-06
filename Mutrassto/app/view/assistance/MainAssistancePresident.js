Ext.define('MutrasstoApp.view.assistance.MainAssistancePresident', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainAssistancePresident',
    activeTab: 0,

    ui: 'navigation',

    requires: [
        'MutrasstoApp.view.assistance.DemandeAssistance',
        //'MutrasstoApp.view.session.SessionController'

    ],

    controller: 'assistance',
    items: [{
        title: 'Demandes',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Demandes d\'assistances'
        },
        items: [{
            xtype: 'formulaire-assistance'
        }]

    }, {
        title: 'Consultation',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Validez ou refutez une demande'
        },
        // items: [{
        //    xtype: 'produit-formulaire-grid'
        //}]
    }, {
        title: 'Demandes refutées',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Demandes d\'assistances refusées'
        },
        // items: [{
        //    xtype: 'produit-formulaire-grid'
        //}]
    }, {
        title: 'Demandes Acceptées',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Demandes d\'assistances acceptées'
        }

    }]


});