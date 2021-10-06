Ext.define('MutrasstoApp.view.session.sessionProd.MainSessionProduit', {
    extend: 'Ext.Container',

    xtype: 'sessionProdFormulaireGrid',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.view.session.sessionProd.SessionProdListe',
        'MutrasstoApp.view.session.sessionProd.SessionProduitFormulaire',
        'MutrasstoApp.view.session.sessionProd.SessionProduitGridModel'
    ],

    viewModel: 'sessionproduitgridviewmodel',

    items: [{

        xtype: 'liste-sesProd',
        flex: 1,
        margin: 10,
        reference: 'refSessionProduitGrid'

    }, {
        xtype: 'formulaire-sessionProduit',
        margin: 10,
        flex: 0.5

    }]

});