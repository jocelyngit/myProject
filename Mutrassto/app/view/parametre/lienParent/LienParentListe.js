Ext.define('MutrasstoApp.view.parametre.lienParent.LienParentListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-lienParent',
    scroll: true,
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.lienParent.LienParent',
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

    title: 'Liste des liens parentés',
    store: {
        type: 'lienParent'
    },

    // viewModel: {
    //    type: 'sessiongridviewmodel'
    //},


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Lien', dataIndex: 'lienParent', flex: 1 }
    ],

    listeners: {
        select: 'onLienParentGridItemSelected'
    },

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});