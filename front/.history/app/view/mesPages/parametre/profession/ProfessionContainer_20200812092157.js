Ext.define('zonblewou.view.mesPages.parametre.profession.ProfessionContainer', {

    extend: 'Ext.Container',

    xtype: 'professionContainer',

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
        'zonblewou.view.mesPages.parametre.profession.ProfessionFormController'

    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'professionFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'professionListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});