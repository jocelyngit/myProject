Ext.define('zonblewou.store.mesStore.AllCotisation', {

    extend: 'Ext.data.Store',

    alias: 'store.allcotisation',

    storeId: 'allcotisationStoreId',

    model: 'zonblewou.model.mesModeles.AllCotisation',

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