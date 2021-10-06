Ext.define('MutrasstoApp.view.parametre.modePaiement.modePaiementGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.modePaiementgridviewmodel',

    requires: [
        //'MutrasstoApp.store.parametre.categorie.Categorie'

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
            bind: '{refModePaiementGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});