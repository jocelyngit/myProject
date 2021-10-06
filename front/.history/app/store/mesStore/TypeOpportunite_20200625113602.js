Ext.define('zonblewou.store.mesStore.TypeOpportunite', {

    extend: 'Ext.data.Store',

    alias: 'store.typeopportunite',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.TypeOpportunite',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/typeOpportunite/findAll?classe=TypeOpportunite',

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