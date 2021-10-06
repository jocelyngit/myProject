Ext.define('MutrasstoApp.view.assistance.MainAssistanceTresorerie', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainAssistanceTresorerie',
    activeTab: 0,

    autoScroll: true,

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
        title: 'Mes Assistances',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Mes demandes d\'assistance '
        },
        // items: [{
        //    xtype: 'formulaire-assistance'
        //}]

    }, {
        title: 'Demandes Acceptées',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Demandes d\'assistances acceptées'
        }

    }]


});