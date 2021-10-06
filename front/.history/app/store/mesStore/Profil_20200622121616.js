Ext.define('zonblewou.store.mesStore.Profil', {

    extend: 'Ext.data.Store',

    alias: 'store.profil',

    model: 'zonblewou.model.mesModeles.Profil',

    proxy: {
        type: 'jsonp',
        url: 'http://localhost:8000/api/profil/findAll?classe=Profil',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },

    autoLoad: 'true',

    /*
          sorters: {
            direction: 'ASC',
            property: 'profil'
        }
    */

});