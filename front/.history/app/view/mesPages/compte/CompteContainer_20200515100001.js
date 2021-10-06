Ext.define('zonblewou.view.mesPages.compte.CompteContainer', {
    extend: 'Ext.Container',

    xtype: 'compteContainer',

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
        'zonblewou.view.mesPages.compte.CompteFormController'

    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'compteFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'compteListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});