Ext.define('zonblewou.view.mesPages.parametre.typeOperation.TypeOperationContainer', {

    extend: 'Ext.Container',

    xtype: 'tOperationContainer',

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
        'zonblewou.view.mesPages.parametre.typeOperation.TypeOperationFormController'


    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'typeOperationFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'typeOperationListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});