Ext.define('MutrasstoApp.view.parametre.profil.MainProfilHbox', {
    extend: 'Ext.Container',

    xtype: 'profilFormulaireGridHbox',
    layout: 'hbox',
    //align: 'start',
    //autoSize: true,

    requires: [
        'MutrasstoApp.view.parametre.ParametreController',
        'MutrasstoApp.view.parametre.profil.ProfilListe',
        'MutrasstoApp.view.parametre.profil.ProfilFormulaire'

    ],

    items: [{

        xtype: 'liste-profil',
        flex: 1,
        margin: 10

    }, {
        xtype: 'formulaire-profil',
        margin: 10,
        flex: 0.5

    }]

});