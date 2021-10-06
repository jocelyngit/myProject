Ext.define('zonblewou.store.mesStore.Membre', {

    extend: 'Ext.data.Store',

    alias: 'store.membre',

    model: 'zonblewou.model.mesModeles.Membre',

    proxy: {
        type: 'jsonp',
        url: 'http://localhost:8000/api/membre/findAll?classe=Membre',

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
        property: 'fullname'
    }
    */

});