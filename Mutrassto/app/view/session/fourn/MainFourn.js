Ext.define('MutrasstoApp.view.session.fourn.MainFourn', {
    extend: 'Ext.Container',

    xtype: 'fournFormulaireGrid',
    layout: 'hbox',
    autoSize: true,

    requires: [
        'MutrasstoApp.view.session.fourn.FournFormulaire',
        'MutrasstoApp.view.session.fourn.FournListe',
        'MutrasstoApp.view.session.fourn.FournFormulaireController',
        'MutrasstoApp.view.session.fourn.FournGridModel'
        //'MutrasstoApp.view.session.SessionModel'
    ],

    controllers: 'fournformulaire',

    viewModel: 'categoriegridviewmodel',

    items: [{
        xtype: 'liste-fourn',
        margin: 10,
        flex: 1,
        reference: 'refFournisseurGrid'

    }, {
        xtype: 'formulaire-fourn',
        margin: 10,
        flex: 0.5

    }]

});