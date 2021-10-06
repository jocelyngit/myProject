Ext.define('MutrasstoApp.view.membre.parent.MainParent', {
    extend: 'Ext.Container',

    xtype: 'parentFormulaireGrid',
    layout: 'hbox',
    autoSize: true,

    requires: [
        'MutrasstoApp.view.membre.parent.ParentFormulaire',
        'MutrasstoApp.view.membre.parent.ParentListe',
        'MutrasstoApp.view.membre.MembreController',
        'MutrasstoApp.view.membre.ParentGridModel'
        //'MutrasstoApp.view.session.SessionModel'
    ],

    controllers: 'membre',

    viewModel: 'parentgridviewmodel',

    items: [{
        xtype: 'liste-parent',
        margin: 10,
        flex: 1,
        reference: 'refParentGrid'


    }, {
        xtype: 'formulaire-parent',
        margin: 10,
        flex: 0.7

    }]

});