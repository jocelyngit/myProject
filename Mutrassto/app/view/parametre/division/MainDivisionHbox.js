Ext.define('MutrasstoApp.view.parametre.division.MainDivisionHbox', {
    extend: 'Ext.Container',

    xtype: 'divisionFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.division.DivisionsListe',
        'MutrasstoApp.view.parametre.division.DivisionsFormulaire',
        'MutrasstoApp.view.parametre.division.DivisionGridModel'
    ],

    viewModel: 'divisiongridviewmodel',

    items: [{
        xtype: 'liste-division',
        reference: 'refDivisionGrid',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-division',
        margin: 10,
        flex: 0.5

    }]

});