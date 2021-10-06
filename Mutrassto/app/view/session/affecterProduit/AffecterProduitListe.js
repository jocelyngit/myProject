Ext.define('MutrasstoApp.view.session.affecterProduit.AffecterProduitListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-affecterProduit',
    id: 'idAffecterProduitGrid',

    requires: [
        'MutrasstoApp.store.produit.Produit',
        'Ext.grid.plugin.DragDrop',
        'Ext.data.*',
        'Ext.dd.*'
    ],
    multiSelect: true,

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragGroup: 'affecterProduitGridDDGroup',
            dropGroup: 'produitAffecterGridDDGroup',

        },
        //allowCopy: true,
        copy: true,

        listeners: {
            drop: function(node, data, dropRec, dropPosition) {
                var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
            }
        }
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Select All',
            iconCls: 'x-fa fa-check-square',

            handler: function() {
                Ext.getCmp('idAffecterProduitGrid').getSelectionModel().selectAll();

                // var gridProduit = Ext.getCmp('idProduitGrid');
                // gridProduit.selection.id = null;

            }
        }, {
            text: 'Deselect All',
            iconCls: 'x-fa fa-square',

            handler: function() {
                Ext.getCmp('idAffecterProduitGrid').getSelectionModel().deselectAll();

                // var gridProduit = Ext.getCmp('idProduitGrid');
                // gridProduit.selection.id = null;

            }
        }]
    }],

    title: 'Liste des produits à affecter',
    store: {
        type: 'produit'
    },

    columns: [
        { text: 'Désignation', dataIndex: 'designation', flex: 1 },
        { text: 'Catégorie de produit', dataIndex: 'categorie', flex: 1 },
        //{ xtype: 'checkcolumn', text: 'Sélection', dataIndex: 'active', id: 'idCheckboxAffecterProduit' }

    ],
    stripeRows: true,

    selModel: {
        checkOnly: false,
        injectCheckbox: 'last',
        mode: 'SIMPLE'
    },
    selType: 'checkboxmodel',

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


})