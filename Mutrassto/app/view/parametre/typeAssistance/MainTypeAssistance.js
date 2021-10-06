Ext.define('MutrasstoApp.view.parametre.typeAssistance.MainTypeAssistance', {
    extend: 'Ext.Container',

    xtype: 'typeAssistanceFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.typeAssistance.TypeAssistanceListe',
        'MutrasstoApp.view.parametre.typeAssistance.TypeAssistanceFormulaire',
        'MutrasstoApp.view.parametre.typeAssistance.TypeAssistanceGridModel'
    ],

    viewModel: 'typeAssistancegridviewmodel',

    items: [{
        xtype: 'liste-typeAssistance',
        flex: 1,
        margin: 10,
        reference: 'refTypeAssistanceGrid'

    }, {
        xtype: 'formulaire-typeAssistance',
        margin: 10,
        flex: 0.5

    }]

});