Ext.define('MutrasstoApp.view.parametre.categorie.MainCategorieHbox', {
    extend: 'Ext.Container',

    xtype: 'categorieFormulaireGridHbox',
    layout: 'hbox',


    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.categorie.CategorieListe',
        'MutrasstoApp.view.parametre.categorie.CategorieFormulaire',
        'MutrasstoApp.view.parametre.categorie.CategorieGridModel'

    ],

    viewModel: 'categoriegridviewmodel',

    items: [{

        xtype: 'liste-categorie',
        flex: 1,
        margin: 10,
        reference: 'refCategorieGrid'
    }, {
        xtype: 'formulaire-categorie',
        margin: 10,
        flex: 0.5

    }]

});