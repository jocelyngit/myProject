Ext.define('zonblewou.view.mesPages.parametre.agentMarketing.AgMarketingContainer', {
    extend: 'Ext.Container',

    xtype: 'agMarketingContainer',

    layout: 'hbox',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [
        /*
          'MutrasstoApp.view.membre.MembreController',
         'MutrasstoApp.view.membre.MembreListe',
         'MutrasstoApp.view.membre.MembreFormulaire',
         'MutrasstoApp.view.membre.MembreGridModel'
        */
        'zonblewou.view.mesPages.parametre.agentMarketing.AgMarketingFormController'


    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'agentMarketingFormulaire',
        flex: 0.4,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'agentMarketingListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1.6

    }]

});