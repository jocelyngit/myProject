Ext.define('zonblewou.store.mesStore.Opportunite', {

    extend: 'Ext.data.Store',

    alias: 'store.opportunite',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.Opportunite',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/opportunite/findAll?classe=Opportunite',

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