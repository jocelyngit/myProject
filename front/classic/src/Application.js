Ext.define('zonblewou.Application', {
    extend: 'Ext.app.Application',

    name: 'zonblewou',

    /*
      views: [
         'zonblewou.view.mesPages.membres.Membres'
     ],
    */

    stores: [
        'NavigationTree',
        'CaisseNavigationTree',
        'CoordinateurNavTree',
        'ControlleurNavigationTree',
        'ChefagCompNavTree'
    ],

    //defaultToken: 'accueil',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.

    //mainView: 'zonblewou.view.main.Main',

    //mainView: 'zonblewou.view.authentication.Login',

    //mainView: 'zonblewou.view.caisseView.main.CaisseMain',

    //mainView: 'zonblewou.view.coordinateur.CoordinateurMain',

    //mainView: 'zonblewou.view.controlleurView.main.ControlleurMain',

    //mainView:'zonblewou.view.chefagcomp.ChefagCompMain',


    launch: function() {

        Ext.create('zonblewou.view.authentication.Login', {
            someConfig: true
        });

    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});