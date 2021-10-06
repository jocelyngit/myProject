Ext.define('zonblewou.store.mesStore.Retrait', {

    extend: 'Ext.data.Store',

    alias: 'store.retrait',

    storeId: 'retraitStoreId',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.Retrait',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    /*
      proxy: {
        type: 'jsonp',
        url: 'http://localhost:8000/api/cotisation/findAll?classe=Cotisation',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },
    */

    autoLoad: 'true',

    /*
      sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
    */

});