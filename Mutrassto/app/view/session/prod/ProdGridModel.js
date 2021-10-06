Ext.define('MutrasstoApp.view.session.prod.ProdGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.produitgridviewmodel',

    requires: [
        'MutrasstoApp.store.produit.Produit'

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
            bind: '{refProduitGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});