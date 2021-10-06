Ext.define('zonblewou.view.mesPages.parametre.profil.ProfilContainer', {
    extend: 'Ext.Container',

    xtype: 'profilContainer',

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
        'zonblewou.view.mesPages.parametre.profil.ProfilFormController'


    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'profilFormulaire',
        flex: 1,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'profiListe',
        margin: '5 0 0 5',
        reference: 'profilGridRef',
        //margin: 15,
        flex: 1

    }]

});