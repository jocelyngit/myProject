Ext.define('MutrasstoApp.view.parametre.modePaiement.ModePaiementListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-modePaiement',
    //reference: 'refSessionGrid',
    id: 'idModePaiementGrid',

    requires: [
        // 'MutrasstoApp.store.parametre.categorie.Categorie',
        //'MutrasstoApp.view.parametre.ParametreController',
        //'MutrasstoApp.view.parametre.modePaiement.ModePaiementFormulaire'
    ],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',
            handler: function() {
                Ext.getCmp('formulaireModePaiement').reset();

                var gridModePaiement = Ext.getCmp('idModePaiementGrid');
                gridModePaiement.selection.id = null;

            }
        }]
    }],

    title: 'Liste des modes de paiements',
    /*store: {
        type: 'modePaiement'
    },*/

    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Mode de Paiement', dataIndex: 'modePaiement', flex: 1 },
    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});