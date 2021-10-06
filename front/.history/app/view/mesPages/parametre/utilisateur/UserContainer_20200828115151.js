Ext.define('zonblewou.view.mesPages.parametre.utilisateur.UserContainer', {
    extend: 'Ext.Container',

    xtype: 'userContainer',

    layout: 'hbox',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [

        'zonblewou.view.mesPages.parametre.utilisateur.UserListe',

        'zonblewou.view.mesPages.parametre.utilisateur.UserFormulaire',

        'zonblewou.view.mesPages.parametre.utilisateur.UserFormController'

    ],

    items: [{

        xtype: 'userFormulaire',
        flex: 0.4,
        margin: '5 5 0 0'

    }, {
        xtype: 'userListe',
        margin: '5 0 0 5',
        //margin: 15,
        flex: 1.6

    }]

});