Ext.define('MutrasstoApp.view.parametre.typeOperation.TypeOperationListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-typeOperation',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.typeOperation.TypeOperation',
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

    title: 'Liste des types d\'opérations',
    store: {
        type: 'typeOperation'
    },

    // viewModel: {
    //    type: 'sessiongridviewmodel'
    //},


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Type d\'opération', dataIndex: 'typeOperation', flex: 1 }
    ],

    listeners: {
        select: 'onTypeOperationGridItemSelected'
    },

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});