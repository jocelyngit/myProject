Ext.define('zonblewou.view.mesPages.parametre.zone.ZoneContainer', {
    extend: 'Ext.Container',

    xtype: 'zoneContainer',

    layout: 'hbox',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [

        'zonblewou.view.mesPages.parametre.zone.ZoneFormController'
    ],

    //viewModel: 'membregridviewmodel',


    items: [{

        xtype: 'zoneFormulaire',
        flex: 0.5,
        margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'zoneListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1

    }]

});