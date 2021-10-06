Ext.define('zonblewou.store.mesStore.AllCotisation', {

    extend: 'Ext.data.Store',

    alias: 'store.allcotisation',

    model: 'zonblewou.model.mesModeles.AllCotisation',

    //pageSize: 25,

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/cotisation/allCotisation?classe=Cotisation',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },

    autoLoad: true,

    /*
      sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
    */

    filters: true

});