Ext.define('MutrasstoApp.view.session.sessionProd.SessionProdListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-sesProd',

    //id: 'idSessionProduitGrid',

    requires: [
        'MutrasstoApp.store.prixProduit.PrixProduits'
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',

            handler: function() {
                Ext.getCmp('formulaireSessionProduit').reset();


                var gridSessionProduit = Ext.getCmp('idSessionProduitGrid');
                gridSessionProduit.selection.id = null;

            }
        }]
    }],

    title: 'Prix des produits',
    store: {
        type: 'prixProduit'
    },

    columns: [{
            text: 'Numéro',
            xtype: 'rownumberer'
        },
        {
            text: 'Session',
            dataIndex: 'session',
            flex: 1
        }, {
            text: 'Produit',
            dataIndex: 'produit',
            flex: 1
        }, {
            text: 'prix',
            dataIndex: 'prix',
            flex: 1
        }
    ],


    rafraichir: function() {
        var store = this.getStore();
        store.reload();
    }


})