Ext.define('MutrasstoApp.view.parametre.categorie.CategorieListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-categorie',
    //reference: 'refSessionGrid',
    id: 'idCategorieGrid',

    requires: [
        'MutrasstoApp.store.parametre.categorie.Categorie',
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.categorie.CategorieFormulaire'
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
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Catégorie de produit', dataIndex: 'libelleCategorie', flex: 1 },
    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});