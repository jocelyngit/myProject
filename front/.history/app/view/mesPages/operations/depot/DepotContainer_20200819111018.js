Ext.define('zonblewou.view.mesPages.operations.depot.DepotContainer', {
    extend: 'Ext.Container',

    xtype: 'depotContainer',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,

    requires: [
        'zonblewou.view.mesPages.operations.depot.DepotValide',

        'zonblewou.view.mesPages.membres.membreListe',

        'zonblewou.view.mesPages.operations.depot.DepotFormController',
        //'MutrasstoApp.view.membre.MembreGridModel'

    ],

    contoller: 'depotform',

    /*
      viewModel: { 
        type : 'membregridviewmodel',
},
    */

    /*
      
    */
    layout: 'hbox',

    items: [{
            xtype: 'depotFormulaire',
            flex: 0.5,
            margin: '5 5 0 0'

        }, {
            xtype: 'depotListe',
            margin: '5 0 0 5',
            flex: 1.5,

        }

    ]

});