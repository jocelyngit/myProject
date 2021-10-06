Ext.define('MutrasstoApp.view.parametre.typeCredit.TypeCreditListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-typeCredit',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.typeCredit.TypeCredit',
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

    title: 'Liste des types de crédit',
    store: {
        type: 'typeCredit'
    },

    // viewModel: {
    //    type: 'sessiongridviewmodel'
    //},


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Type de crédit', dataIndex: 'typeCredit', flex: 1 }
    ],

    listeners: {
        select: 'onTypeCreditGridItemSelected'
    },

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});