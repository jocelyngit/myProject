Ext.define('MutrasstoApp.view.session.SessionGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sessiongridviewmodel',

    requires: [
        'MutrasstoApp.store.session.Session'

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
            bind: '{refSessionGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});