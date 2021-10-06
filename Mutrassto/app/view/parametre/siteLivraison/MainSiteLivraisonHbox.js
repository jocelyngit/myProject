Ext.define('MutrasstoApp.view.parametre.siteLivraison.MainSiteLivraisonHbox', {
    extend: 'Ext.Container',

    xtype: 'siteLivraisonFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.siteLivraison.SiteLivraisonListe',
        'MutrasstoApp.view.parametre.siteLivraison.SiteLivraisonFormulaire'

    ],

    items: [{

        xtype: 'liste-siteLivraison',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-siteLivraison',
        margin: 10,
        flex: 0.5

    }]

});