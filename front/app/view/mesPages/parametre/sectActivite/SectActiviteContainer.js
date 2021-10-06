Ext.define('zonblewou.view.mesPages.parametre.sectActivite.SectActiviteContainer', {

    extend: 'Ext.Container',

    xtype: 'sectactiviteContainer',

    layout: 'hbox',

    autoScroll: true,

    scrollable: 'y',

    //align: 'start',
    //autoSize: true,


    requires: [
        /*
          'MutrasstoApp.view.membre.MembreController',
         'MutrasstoApp.view.membre.MembreListe',
         'MutrasstoApp.view.membre.MembreFormulaire',
         'MutrasstoApp.view.membre.MembreGridModel'
        */
        'zonblewou.view.mesPages.parametre.sectActivite.SectActiviteFormController'


    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'sectactiviteFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'sectactiviteListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});