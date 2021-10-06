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

    /*
      viewModel: { 
        type : 'membregridviewmodel',
},
    */

    /*
      
    */
    layout: 'hbox',

    items: [{
            xtype: 'membreFormulaire',
            flex: 0.5,
            margin: '5 5 0 0'

        }, {
            xtype: 'membreListe',
            margin: '5 0 0 5',
            flex: 1.5,

        }

    ]

});