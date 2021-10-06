Ext.define('MutrasstoApp.view.session.fourn.FournGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.fournisseurgridviewmodel',

    requires: [
        'MutrasstoApp.store.fournisseur.Fournisseur'

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
            bind: '{refFournisseurGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});