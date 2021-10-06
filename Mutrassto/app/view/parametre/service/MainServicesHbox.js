Ext.define('MutrasstoApp.view.parametre.service.MainServicesHbox', {
    extend: 'Ext.Container',

    xtype: 'servicesFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.service.ServicesListe',
        'MutrasstoApp.view.parametre.service.ServicesFormulaire',
        'MutrasstoApp.view.parametre.service.ServicesGridModel'

    ],

    viewModel: 'servicesgridviewmodel',

    items: [{

        xtype: 'liste-services',
        reference: 'refServicesGrid',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-services',
        margin: 10,
        flex: 0.5

    }]

});