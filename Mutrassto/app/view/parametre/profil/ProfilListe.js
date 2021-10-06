Ext.define('MutrasstoApp.view.parametre.profil.ProfilListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-profil',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.profil.Profil',
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

    title: 'Liste des profils',
    store: {
        type: 'profil'
    },

    // viewModel: {
    //    type: 'sessiongridviewmodel'
    //},

    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Profil', dataIndex: 'profil', flex: 1 }
    ],

    listeners: {
        select: 'onProfilGridItemSelected'
    },

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }



});