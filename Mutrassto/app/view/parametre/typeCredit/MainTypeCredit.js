Ext.define('MutrasstoApp.view.parametre.typeCredit.MainTypeCredit', {
    extend: 'Ext.Container',

    xtype: 'typeCreditFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.typeCredit.TypeCreditListe',
        'MutrasstoApp.view.parametre.typeCredit.TypeCreditFormulaire'
    ],

    items: [{
        xtype: 'liste-typeCredit',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-typeCredit',
        margin: 10,
        flex: 0.5

    }]

});