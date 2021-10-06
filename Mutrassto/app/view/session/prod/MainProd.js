Ext.define('MutrasstoApp.view.session.prod.MainProd', {
    extend: 'Ext.Container',

    xtype: 'prodFormulaireGrid',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.view.session.prod.ProdListe',
        'MutrasstoApp.view.session.prod.ProdGridModel'
    ],

    viewModel: 'produitgridviewmodel',

    items: [{

        xtype: 'liste-prod',
        flex: 1,
        margin: 10,
        reference: 'refProduitGrid'

    }, {
        xtype: 'formulaire-prod',
        margin: 10,
        flex: 0.5

    }]

});