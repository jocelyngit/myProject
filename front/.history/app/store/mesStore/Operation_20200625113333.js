Ext.define('zonblewou.store.mesStore.Operation', {

    extend: 'Ext.data.Store',

    alias: 'store.operation',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.Operation',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/operation/findAll?classe=Operation',

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
        property: 'fullname'
    }
    */

});