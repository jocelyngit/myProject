Ext.define('zonblewou.store.mesStore.User', {

    extend: 'Ext.data.Store',

    alias: 'store.user',

    model: 'zonblewou.model.mesModeles.User',

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