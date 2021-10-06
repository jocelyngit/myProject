Ext.define('zonblewou.store.mesStore.Compte', {

    extend: 'Ext.data.Store',

    alias: 'store.compte',

    pageSize: 15,

    model: 'zonblewou.model.mesModeles.Compte',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/compte/findAll?classe=Compte',

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