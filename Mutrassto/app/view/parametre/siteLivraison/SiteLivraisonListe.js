Ext.define('MutrasstoApp.view.parametre.siteLivraison.SiteLivraisonListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-siteLivraison',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.siteLivraison.SiteLivraison',
        'MutrasstoApp.view.parametre.ParametreController'
    ],


    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus'
        }]
    }],

    title: 'Liste des sites de livraisons',
    store: {
        type: 'siteLivraison'
    },

    // viewModel: {
    //    type: 'sessiongridviewmodel'
    //},


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Site de livraison', dataIndex: 'siteLivraison', flex: 1 }
    ],

    listeners: {
        select: 'onSiteLivraisonGridItemSelected'
    },

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }



});