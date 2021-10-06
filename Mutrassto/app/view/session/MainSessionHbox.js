Ext.define('MutrasstoApp.view.session.MainSessionHbox', {
    extend: 'Ext.Container',

    xtype: 'sessionFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.session.SessionFormulaire',
        'MutrasstoApp.view.session.SessionListe',
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.view.session.SessionGridModel'

    ],

    controller: 'session',
    viewModel: 'sessiongridviewmodel',

    items: [{

        xtype: 'liste-session',
        reference: 'refSessionGrid',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-session',
        margin: 10,
        flex: 0.5
    }]

});