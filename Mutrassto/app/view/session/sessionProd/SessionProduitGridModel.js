Ext.define('MutrasstoApp.view.session.sessionProd.SessionProduitGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.sessionproduitgridviewmodel',

    requires: [
        'MutrasstoApp.store.prixProduit.PrixProduits'

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
            bind: '{refSessionProduitGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});