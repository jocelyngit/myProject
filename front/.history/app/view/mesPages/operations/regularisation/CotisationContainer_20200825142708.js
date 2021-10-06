Ext.define('zonblewou.view.mesPages.operations.regularisation.CotisationContainer', {

    extend: 'Ext.Container',

    xtype: 'cotisationContainer',

    layout: 'vbox',

    //margin: '5 0 0 5',

    //autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [

        'zonblewou.view.mesPages.operations.regularisation.CotisationListe',

        'zonblewou.view.mesPages.operations.regularisation.CotisationFormulaire',

        'zonblewou.view.mesPages.operations.regularisation.CotisationFormController'
    ],

    //viewModel: 'membregridviewmodel',

    items: [{

        xtype: 'cotisationFormulaire',
        flex: 1,
        width: '100%',
        //scrollable: true,
        //autoScroll: true
        //height: 100
        //margin: '5 5 0 0',
        //margin: 15
        //reference: 'refMembreGrid'
    }, {
        xtype: 'cotisationListe',
        width: '100%',
        // margin: '5 0 0 5',
        flex: 2
    }]

});