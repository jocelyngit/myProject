Ext.define('zonblewou.view.mesPages.membres.MembreContainer', {
    extend: 'Ext.Container',

    xtype: 'membreContainer',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [
        'zonblewou.view.mesPages.membres.MembreFormController',
        'zonblewou.view.mesPages.membres.membreListe',
        'zonblewou.view.mesPages.membres.MembreFormulaire',
        //'MutrasstoApp.view.membre.MembreGridModel'

    ],

    contoller: 'membreform',

    // viewModel: 'membregridviewmodel',

    layout: 'fit',

    items: [
        /*
          {

        xtype: 'membreFormulaire',
        flex: 0.75,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    },
        */
        {
            xtype: 'membreListe',
            margin: '5 0 0 5',
            //margin: 15,
            flex: 2

        }
    ]

});