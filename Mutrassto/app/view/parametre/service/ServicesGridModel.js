Ext.define('MutrasstoApp.view.parametre.service.ServicesGridModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.servicesgridviewmodel',

    requires: [
        'MutrasstoApp.store.parametre.service.Service'

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
            bind: '{refServicesGrid.selection}',
            get: function(selection) {
                return selection;
            }
        }
    }

});