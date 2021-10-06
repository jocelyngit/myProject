Ext.define('zonblewou.store.mesStore.TypeCompte', {

    extend: 'Ext.data.Store',

    alias: 'store.typecompte',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.TypeCompte',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/typeCompte/findAll?classe=TypeCompte',

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