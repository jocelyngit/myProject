Ext.define('MutrasstoApp.view.parametre.categorie.CategorieGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.categoriegridviewmodel',

    requires: [
        'MutrasstoApp.store.parametre.categorie.Categorie'

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
            bind: '{refCategorieGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});