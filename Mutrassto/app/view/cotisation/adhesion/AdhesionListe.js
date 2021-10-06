Ext.define('MutrasstoApp.view.parametre.categorie.CategorieListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-adhesion',
    //reference: 'refSessionGrid',
    //id: 'idCategorieGrid',

    requires: [

    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',
            handler: function() {
                var takCmp = Ext.getCmp('formulaireCategorie');
                takCmp.reset();

                var gridSession = Ext.getCmp('idCategorieGrid');
                gridSession.selection.id = null;

            }
        }]
    }],

    title: 'Liste des catégories de produit',
    store: {
        type: 'categorie'
    },

    columns: [
        { text: 'Numéro', dataIndex: 'id' },
        { text: 'Catégorie de produit', dataIndex: 'libelleCategorie', flex: 1 },
    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});