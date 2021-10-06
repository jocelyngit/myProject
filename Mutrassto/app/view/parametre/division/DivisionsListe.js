Ext.define('MutrasstoApp.view.parametre.division.DivisionsListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-division',
    scroll: true,
    id: 'idDivisionGrid',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.division.Division',
        'MutrasstoApp.view.parametre.ParametreController'

    ],


    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',

            handler: function() {
                var takCmp = Ext.getCmp('formulaireDivision');
                takCmp.reset();

                // var gridSession = Ext.getCmp('idCategorieGrid');
                // gridSession.selection.id = null;

            }
        }]
    }],

    title: 'Liste des divisions',
    store: {
        type: 'division'
    },

    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Division', dataIndex: 'division', flex: 1 },

    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});