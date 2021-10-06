Ext.define('MutrasstoApp.view.session.prod.ProdListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-prod',
    id: 'idProduitGrid',

    requires: [
        'MutrasstoApp.store.produit.Produit'
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',

            handler: function() {
                var takCmp = Ext.getCmp('formulaireProduit');
                takCmp.reset();

                var gridProduit = Ext.getCmp('idProduitGrid');
                gridProduit.selection.id = null;

            }
        }]
    }],

    title: 'Liste des produits',
    store: {
        type: 'produit'
    },

    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Désignation', dataIndex: 'designation' },
        { text: 'Catégorie de produit', dataIndex: 'categorie' },
        { text: 'Session', renderer: Ext.util.Format.dateRenderer('d/m/Y'), dataIndex: 'session', flex: 1 },
        { text: 'Date de l\'enregistrement', renderer: Ext.util.Format.dateRenderer('d/m/Y'), dataIndex: 'dateEnreg', flex: 1 },
        { text: 'Fournisseur', dataIndex: 'fournisseur', flex: 1 }

    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


})