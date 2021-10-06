Ext.define('MutrasstoApp.view.session.MainSession', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainSession',
    activeTab: 0,
    ui: 'navigation',

    requires: [
        'MutrasstoApp.view.session.prod.MainProd',
        'MutrasstoApp.view.session.SessionController'
        // 'MutrasstoApp.view.session.fournisseur.MainFournisseurs',
        //'MutrasstoApp.view.session.prixProduit.MainPrixProduitHbox'
    ],

    controller: 'session',

    items: [{
        title: 'Session',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Session de crédit alimentaire'
        },
        items: [{
            xtype: 'sessionFormulaireGridHbox'
        }]

    }, {
        title: 'Produit',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Produits'
        },
        items: [{
            xtype: 'prodFormulaireGrid'
        }]
    }, {
        title: 'Fournisseur',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Fournisseurs'
        },
        items: [{
            xtype: 'fournFormulaireGrid'
        }]

    }, {
        title: 'Prix des produits',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Modification des prix de produits'
        },
        items: [{
            xtype: 'sessionProdFormulaireGrid'
        }]

    }, {
        title: 'Affecter un produit',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Affecter un produit existant à une session'
        },
        items: [{
            xtype: 'mainAffecterProduitGrid'
        }]

    }]

});