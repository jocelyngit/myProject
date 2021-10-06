Ext.define('MutrasstoApp.view.parametre.situationMatrimoniale.SituationMatrimonialeListe', {
    extend: 'Ext.grid.Panel',

    xtype: 'liste-situationMatrimoniale',
    //reference: 'refSessionGrid',

    requires: [
        'MutrasstoApp.store.parametre.situationMatrimoniale.SituationMatrimoniale',
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

    title: 'Liste des situations matrimoniales',
    store: {
        type: 'situationMatrimoniale'
    },

    // viewModel: {
    //    type: 'sessiongridviewmodel'
    //},

    columns: [
        { text: 'Numéro', xtype: 'rownumberer' },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Situation matrimoniale', dataIndex: 'situationMatrimoniale', flex: 1 }
    ],

    listeners: {
        select: 'onSituationMatrimonialeGridItemSelected'
    },

    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }



});