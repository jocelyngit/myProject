Ext.define('MutrasstoApp.view.parametre.typeOperation.MainTypeOperation', {
    extend: 'Ext.Container',

    xtype: 'typeOperationFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.typeOperation.TypeOperationListe',
        'MutrasstoApp.view.parametre.typeOperation.TypeOperationFormulaire'
    ],

    items: [{
        xtype: 'liste-typeOperation',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-typeOperation',
        margin: 10,
        flex: 0.5

    }]

});