Ext.define('MutrasstoApp.view.parametre.typeAssistance.TypeAssistanceGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.typeAssistancegridviewmodel',

    requires: [
        'MutrasstoApp.store.parametre.typeAssistance.TypeAssistance'

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
            bind: '{refTypeAssistanceGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});