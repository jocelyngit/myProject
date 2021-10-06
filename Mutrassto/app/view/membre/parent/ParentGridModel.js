Ext.define('MutrasstoApp.view.membre.ParentGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.parentgridviewmodel',

    requires: [
        'MutrasstoApp.store.parent.Parent'

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
            bind: '{refParentGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});