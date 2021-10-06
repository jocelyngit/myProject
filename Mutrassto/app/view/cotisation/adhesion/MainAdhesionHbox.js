Ext.define('MutrasstoApp.view.cotisation.adhesion.MainAdhesionHbox', {
    extend: 'Ext.Container',

    xtype: 'adhesionFormulaireGridHbox',
    layout: 'hbox',


    //align: 'start',
    //autoSize: true,

    requires: [


    ],

    // viewModel: 'categoriegridviewmodel',

    items: [{

        xtype: 'liste-a',
        flex: 1,
        margin: 10,
        //reference: 'refCategorieGrid'
    }, {
        //xtype: 'formulaire-categorie',
        margin: 10,
        flex: 0.5

    }]

});