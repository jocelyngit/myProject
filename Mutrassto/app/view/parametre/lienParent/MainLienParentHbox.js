Ext.define('MutrasstoApp.view.parametre.lienParent.MainLienParentHbox', {
    extend: 'Ext.Container',

    xtype: 'lienParentFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.lienParent.LienParentListe',
        'MutrasstoApp.view.parametre.lienParent.LienParentFormulaire'
    ],

    items: [{
        xtype: 'liste-lienParent',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-lienParent',
        margin: 10,
        flex: 0.5

    }]

});