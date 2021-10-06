Ext.define('zonblewou.store.mesStore.AyantDroit', {

    extend: 'Ext.data.Store',

    alias: 'store.ayantdroit',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.AyantDroit',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/ayantDroit/findAll?classe=AyantDroit',

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