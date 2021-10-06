Ext.define('MutrasstoApp.view.parametre.service.ServicesListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-services',
    id: 'idServicesGrid',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.service.Service',
        'MutrasstoApp.view.parametre.ParametreController'

    ],


    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus',

            handler: function() {
                var takCmp = Ext.getCmp('formulaireServices');
                takCmp.reset();

                // var gridSession = Ext.getCmp('idCategorieGrid');
                // gridSession.selection.id = null;

            }
        }]
    }],

    title: 'Liste des servces',
    store: {
        type: 'service'
    },


    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Division', dataIndex: 'division', flex: 1 },
        { text: 'Services', dataIndex: 'services', flex: 1 }


    ],

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }



});