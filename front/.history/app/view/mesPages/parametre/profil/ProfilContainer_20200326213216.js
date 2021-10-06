Ext.define('zonblewou.view.mesPages.membres.MembreContainer', {
    extend: 'Ext.Container',

    xtype: 'membreContainer',

    layout: 'hbox',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,

    /*
      requires: [
         'MutrasstoApp.view.membre.MembreController',
         'MutrasstoApp.view.membre.MembreListe',
         'MutrasstoApp.view.membre.MembreFormulaire',
         'MutrasstoApp.view.membre.MembreGridModel'

     ],

     viewModel: 'membregridviewmodel',
    */

    items: [{

        xtype: 'membreFormulaire',
        flex: 0.75,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'membreListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 2

    }]

});