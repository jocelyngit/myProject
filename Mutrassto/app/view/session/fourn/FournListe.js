Ext.define('MutrasstoApp.view.session.fourn.FournListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-fourn',
    //reference: 'refFournisseurGrid',

    id: 'idFournisseurGrid',

    requires: [
        'MutrasstoApp.store.fournisseur.Fournisseur',
        'MutrasstoApp.view.session.SessionController'

    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',

            handler: function() {
                var takCmp = Ext.getCmp('formulaireFournisseur');
                takCmp.reset();

                var gridFournisseur = Ext.getCmp('idFournisseurGrid');
                gridFournisseur.selection.id = null;

            }
        }]
    }],

    title: 'Liste des fournisseurs',
    store: {
        type: 'fournisseur'
    },

    //viewModel: {
    //   type: 'sessiongridviewmodel'
    // },


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Nom et Prénoms', dataIndex: 'raisonSociale', flex: 1 },
        { text: 'Adresse', dataIndex: 'adressFournisseur', flex: 1 },
        { text: 'Téléphone', dataIndex: 'telFournisseur', flex: 0.75 },
        { text: 'Email', dataIndex: 'emailFournisseur', flex: 1 }

    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});