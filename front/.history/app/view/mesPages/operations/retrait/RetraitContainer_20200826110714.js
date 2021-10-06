Ext.define('zonblewou.view.mesPages.operations.retrait.RetraitContainer', {

    extend: 'Ext.Container',

    xtype: 'retraitContainer',

    layout: 'vbox',

    //margin: '5 0 0 5',

    //autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [

        'zonblewou.view.mesPages.operations.retrait.RetraitListe',

        'zonblewou.view.mesPages.operations.retrait.RetraitFormulaire',

        'zonblewou.view.mesPages.operations.retrait.RetraitFormController'
    ],

    //viewModel: 'membregridviewmodel',

    items: [{

        xtype: 'retraitFormulaire',
        flex: 1,
        width: '100%'
            //scrollable: true,
            //autoScroll: true
            //height: 100
            //margin: '5 5 0 0',
            //margin: 15
            //reference: 'refMembreGrid'
    }, {
        xtype: 'retraitListe',
        width: '100%',
        // margin: '5 0 0 5',
        flex: 2
    }]

});