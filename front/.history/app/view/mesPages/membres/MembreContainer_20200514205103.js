Ext.define('zonblewou.view.mesPages.membres.MembreContainer', {
    extend: 'Ext.Container',

    xtype: 'membreContainer',

    //autoScroll: true,
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

    layout: 'fit',

    items: [{
            xtype: 'membreListe',
            margin: '5 0 0 5',
            //margin: 15,

        },

        /*
          {
            xtype: 'window',
            itemId: 'membreWinItemId',

            defaultFocus: 'nomMembre',

            // we do not want to destroy window so we only hide it on close
            closeAction: 'close', //close
            modal: true,
            layout: 'fit',
            floating: true,
            width: 350,
            items: [{
                xtype: 'membreFormulaire'
            }]

        },
        */

    ]

});