Ext.define('MutrasstoApp.view.parametre.situationMatrimoniale.MainSituationMatrimonialeHbox', {
    extend: 'Ext.Container',

    xtype: 'situationMatrimonialeFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.situationMatrimoniale.SituationMatrimonialeListe',
        'MutrasstoApp.view.parametre.situationMatrimoniale.SituationMatrimonialeFormulaire'

    ],

    items: [{

        xtype: 'liste-situationMatrimoniale',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-situationMatrimoniale',
        margin: 10,
        flex: 0.5

    }]

});