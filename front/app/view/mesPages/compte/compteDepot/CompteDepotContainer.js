Ext.define('zonblewou.view.mesPages.compte.compteDepot.CompteDepotContainer', {

    extend: 'Ext.Container',

    xtype: 'compteDepotContainer',

    layout: 'hbox',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [

        'zonblewou.view.mesPages.compte.compteDepot.CompteDepotListe',

        'zonblewou.view.mesPages.compte.compteDepot.CompteDepotFormulaire',

        'zonblewou.view.mesPages.compte.compteDepot.CompteDepotFormController'

    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'compteDepotFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'compteDepotListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1.5

    }]

});