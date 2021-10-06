Ext.define('zonblewou.view.mesPages.parametre.agence.AgenceContainer', {

    extend: 'Ext.Container',

    xtype: 'agenceContainer',

    layout: 'hbox',

    autoScroll: true,

    scrollable: true,
    //align: 'start',
    //autoSize: true,


    requires: [
        /*
          'MutrasstoApp.view.membre.MembreController',
         'MutrasstoApp.view.membre.MembreListe',
         'MutrasstoApp.view.membre.MembreFormulaire',
         'MutrasstoApp.view.membre.MembreGridModel'
        */
        'zonblewou.view.mesPages.parametre.agence.AgenceFormController'


    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'agenceFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'agenceListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});