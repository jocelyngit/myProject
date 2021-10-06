Ext.define('MutrasstoApp.view.parametre.division.DivisionGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.divisiongridviewmodel',

    requires: [
        'MutrasstoApp.store.parametre.division.Division'

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
            bind: '{refDivisionGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});