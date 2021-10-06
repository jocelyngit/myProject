Ext.define('MutrasstoApp.view.session.affecterProduit.ProduitAffecterListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-produitAffecter',
    id: 'idProduitAffecterGrid',

    requires: [
        'MutrasstoApp.store.produitAffecter.ProduitAffecter',
        'Ext.form.Panel',
        'Ext.grid.plugin.DragDrop',
        'Ext.data.*',
        'Ext.dd.*'
    ],

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragGroup: 'produitAffecterGridDDGroup',
            dropGroup: 'affecterProduitGridDDGroup'
        },
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
            text: 'Restaurer',
            iconCls: 'x-fa fa-eraser',

            handler: function() {
                Ext.getCmp('idProduitAffecterGrid').remove();

                // var gridProduit = Ext.getCmp('idProduitGrid');
                // gridProduit.selection.id = null;

            }
        }, {
            text: 'Affecter',
            iconCls: 'x-fa fa-chevron-right',

            handler: function() {
                var selection = Ext.getCmp('idProduitAffecterGrid').getSelection();
                if (selection.length) {
                    Ext.Msg.alert('Selected Record', selection.records);
                }

            }
        }]
    }],


    title: 'Liste des produits affectés',
    store: {
        type: 'produitAffecter'
    },

    columns: [
        { text: 'Numéro', xtype: 'rownumberer', flex: 1 },
        { text: 'Désignation', dataIndex: 'designation', flex: 1 },
        { text: 'Catégorie de produit', dataIndex: 'categorie', flex: 1 },
        //{ xtype: 'checkcolumn', text: 'Sélection', dataIndex: 'active', id: 'idCheckboxAffecterProduit' }

    ],
    stripeRows: true,

    /*  buttons: [{
          text: 'Affecter',
          iconCls: 'x-fa fa-chevron-right',
          handler: function() {
              //Ext.getCmp('testGrid').getSelectionModel().selectAll();
          }

      }],*/

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    },

    remove: function() {
        var store = this.getStore();
        store.removeAll();
    }


})