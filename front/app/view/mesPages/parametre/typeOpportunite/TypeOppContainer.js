Ext.define('zonblewou.view.mesPages.parametre.typeOpportunite.TypeOppContainer', {

    extend: 'Ext.Container',

    xtype: 'tOppContainer',

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
        'zonblewou.view.mesPages.parametre.typeOpportunite.TypeOppFormController'


    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'tOppFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'tOppListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});