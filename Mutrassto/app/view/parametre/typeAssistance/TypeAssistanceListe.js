Ext.define('MutrasstoApp.view.parametre.typeAssistance.TypeAssistanceListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-typeAssistance',

    id: 'idTypeAssistanceGrid',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.typeAssistance.TypeAssistance',
        'MutrasstoApp.view.parametre.ParametreController'

    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',
            handler: function() {
                Ext.getCmp('formulaireTypeAssistance').reset();

                var gridTypeAssistanceMembre = Ext.getCmp('idTypeAssistanceGrid');
                gridTypeAssistanceMembre.selection.id = null;

            }
        }]
    }],

    title: 'Liste des types d\'assistances',
    store: {
        type: 'typeAssistance'
    },

    // viewModel: {
    //    type: 'sessiongridviewmodel'
    //},


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Type d\'assistance', dataIndex: 'typeAssistance', flex: 1 },
        { text: 'Montant alloué (FCFA)', dataIndex: 'montantAlloue', flex: 1 },
        { text: 'Description', dataIndex: 'descripAssistance', flex: 1 }

    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});