Ext.define('zonblewou.store.mesStore.Utilisateur', {

    extend: 'Ext.data.Store',

    alias: 'store.utilisateur',

    model: 'zonblewou.model.mesModeles.Utilisateur',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/Authentification/auth/findAll?classe=User',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },

    autoLoad: true

    /*
          sorters: {
            direction: 'ASC',
            property: 'nomUser'
        }
    */

});