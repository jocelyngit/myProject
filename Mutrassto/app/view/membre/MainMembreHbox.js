Ext.define('MutrasstoApp.view.membre.MainMembreHbox', {
    extend: 'Ext.Container',

    xtype: 'membreFormulaireGridHbox',
    layout: 'hbox',
    autoScroll: true,


    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.membre.MembreController',
        'MutrasstoApp.view.membre.MembreListe',
        'MutrasstoApp.view.membre.MembreFormulaire',
        'MutrasstoApp.view.membre.MembreGridModel'

    ],

    viewModel: 'membregridviewmodel',

    items: [{

        xtype: 'liste-membre',
        flex: 1,
        margin: '5 5 0 0',
        reference: 'refMembreGrid'
    }, {
        xtype: 'formulaire-membre',
        margin: '5 0 0 5',
        flex: 0.75

    }]

});