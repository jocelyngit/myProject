Ext.define('MutrasstoApp.view.membre.parent.ParentListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-parent',

    id: 'idParentGrid',
    // reference: 'refFournisseurGrid',

    requires: [
        'MutrasstoApp.store.parent.Parent',
        'MutrasstoApp.view.membre.MembreController'
    ],


    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',

            handler: function() {
                Ext.getCmp('formulaireParent').reset();

                var gridParent = Ext.getCmp('idParentGrid');

                gridParent.selection.id = null;

            }
        }, {
            text: 'Imprimer',
            iconCls: 'x-fa fa-print',

            handler: function() {

                var gridParent = Ext.getCmp('idParentGrid');

                MutrasstoApp.ux.grid.Printer.mainTitle = 'LISTE DES PARENTS DES MEMBRES';

                MutrasstoApp.ux.grid.Printer.print(gridParent);
                // Ext.getCmp('idMembreGrid').reset();

            }
        }]
    }],

    title: 'Liste des parents des membres',
    store: {
        type: 'parent'
    },

    //viewModel: {
    //   type: 'sessiongridviewmodel'
    // },


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Nom et Prénoms', dataIndex: 'nomPrenomParent', flex: 1 },
        { text: 'Adresse', dataIndex: 'adressParent', flex: 1 },
        { text: 'Nom du Membre', dataIndex: 'membre', flex: 1 },
        { text: 'Lien Parent', dataIndex: 'lienParent', flex: 0.5 }

    ],


    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});