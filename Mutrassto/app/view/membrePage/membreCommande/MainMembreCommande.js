Ext.define('MutrasstoApp.view.membrePage.membreCommande.MainMembreCommande', {
    extend: 'Ext.tab.Panel',

    xtype: 'mainMembreCommande',
    activeTab: 0,

    ui: 'navigation',

    requires: [
        //'MutrasstoApp.view.assistance.DemandeAssistance',
        //'MutrasstoApp.view.session.SessionController'

    ],

    //controller: 'assistance',
    items: [{
        title: 'Commande',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Passez Votre commande!!!'
        },
        items: [{
            xtype: 'mainCommandes'
        }]

    }, {
        title: 'Formulaire',
        hidden: true,
        id: 'idCommandeTabFormulaire',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Formulaire de commande!!!'
        },
        items: [{
            xtype: 'formulaireDeCommandes'
        }]

    }, {
        title: 'Mes commandes',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Mes commandes'
        },
        // items: [{
        //    xtype: 'produit-formulaire-grid'
        //}]
    }]


});