Ext.define('zonblewou.store.mesStore.Zone', {

    extend: 'Ext.data.Store',

    alias: 'store.zone',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.Zone',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/zone/findAll?classe=Zone',

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