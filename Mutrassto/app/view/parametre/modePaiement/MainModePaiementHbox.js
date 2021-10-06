Ext.define('MutrasstoApp.view.parametre.modePaiement.MainModePaiementHbox', {
    extend: 'Ext.Container',

    xtype: 'modePaiementFormulaireGridHbox',
    layout: 'hbox',


    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.modePaiement.ModePaiementListe',
        'MutrasstoApp.view.parametre.modePaiement.ModePaiementFormulaire',
        // 'MutrasstoApp.view.parametre.categorie.CategorieGridModel'

    ],

    // viewModel: 'categoriegridviewmodel',

    items: [{

        xtype: 'liste-modePaiement',
        flex: 1,
        margin: 10,
        reference: 'refModePaiementGrid'
    }, {
        xtype: 'formulaire-modePaiement',
        margin: 10,
        flex: 0.5

    }]

});