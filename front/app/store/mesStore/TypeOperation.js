Ext.define('zonblewou.store.mesStore.TypeOperation', {

    extend: 'Ext.data.Store',

    alias: 'store.typeoperation',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.TypeOperation',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/typeOperation/findAll?classe=TypeOperation',

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

});