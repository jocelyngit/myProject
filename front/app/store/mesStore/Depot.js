Ext.define('zonblewou.store.mesStore.Depot', {

    extend: 'Ext.data.Store',

    alias: 'store.depot',

    storeId: 'depotStoreId',

    model: 'zonblewou.model.mesModeles.Depot',

    //pageSize: 25,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },


    /*proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/cotisation/allCotisation?classe=Cotisation',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },

     */

   autoLoad: true,
    autoSync: true

    /*
      sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
    */

});