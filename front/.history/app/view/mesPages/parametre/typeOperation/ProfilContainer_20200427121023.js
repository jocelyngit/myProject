Ext.define('zonblewou.view.mesPages.parametre.profil.ProfilContainer', {
    extend: 'Ext.Container',

    xtype: 'typeOperationContainer',

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
        'zonblewou.view.mesPages.parametre.typOperation.TypeOperationFormController'


    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'typeOperationFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'TypeOperationListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});