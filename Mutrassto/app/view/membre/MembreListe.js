/**
 * This view is an example list of people.
 */
Ext.define('MutrasstoApp.view.membre.MembreListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-membre',
    scroll: true,

    id: 'idMembreGrid',

    requires: [
        'MutrasstoApp.store.membre.Membre',
        'MutrasstoApp.ux.grid.Printer'
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',

            handler: function() {
                Ext.getCmp('formulaireMembre').reset();

                var gridMembre = Ext.getCmp('idMembreGrid');

                gridMembre.selection.id = null;

            }
        }, {
            text: 'Imprimer',
            iconCls: 'x-fa fa-print',

            handler: function() {

                var gridMembre = Ext.getCmp('idMembreGrid');

                MutrasstoApp.ux.grid.Printer.mainTitle = 'LISTE DES MEMBRES';

                MutrasstoApp.ux.grid.Printer.print(gridMembre);
                // Ext.getCmp('idMembreGrid').reset();

            }
        }]
    }],

    title: 'Liste des membres',

    store: {
        type: 'membre'
    },

    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Nom et Prénoms', dataIndex: 'nomPrenomMembre', flex: 1 },
        // { text: 'Profession', dataIndex: 'profession', flex: 1 },
        { text: 'Services', dataIndex: 'services', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        //{ text: 'Profil', dataIndex: 'profil' },
        //{ text: 'Login', dataIndex: 'situationMatrimoniale', flex: 1 },
        //{ text: 'Date de naissance', dataIndex: 'dateNaissance', flex: 1 },
        //{ text: 'Situation matrimoniale', dataIndex: 'situationMatrimoniale' }

    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});