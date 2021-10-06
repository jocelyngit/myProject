Ext.define('MutrasstoApp.view.membre.MembreGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.membregridviewmodel',

    requires: [
        'MutrasstoApp.store.membre.Membre'

    ],

    /* stores: {
         session: {
             model: 'session',
             //autoLoad: true
         }
     },*/


    /*formulas: {
        currentSession: {
            bind: '{refSessionGrid.selection}',
            get: function(session) {
                this.set('current.session', session);
                this.set('sessionData', session);
                return session;
            }
        }

    }*/

    formulas: {
        selection: {
            bind: '{refMembreGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});