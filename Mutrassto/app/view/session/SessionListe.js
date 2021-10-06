Ext.define('MutrasstoApp.view.session.SessionListe', {
    extend: 'Ext.grid.Panel',
    xtype: 'liste-session',

    //bind: '{session}',
    //reference: 'refSessionGrid',

    id: 'idSessionGrid',

    requires: [
        'MutrasstoApp.store.session.Session',
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.view.session.SessionGridModel'

    ],
    //viewModel: {
    //   type: 'sessiongridviewmodel'
    //},

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus'
        }]
    }],


    title: 'Liste des sessions',
    store: {
        type: 'session'
    },

    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Date de début', dataIndex: 'dateDebutSession', renderer: Ext.util.Format.dateRenderer('d/m/Y'), flex: 1 },
        { text: 'Etat', dataIndex: 'etatEvenement', flex: 1 }

    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});