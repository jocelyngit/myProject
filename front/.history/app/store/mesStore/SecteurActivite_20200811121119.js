Ext.define('zonblewou.store.mesStore.Agence', {

    extend: 'Ext.data.Store',

    alias: 'store.agence',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.Agence',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/agence/findAll?classe=Agence',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },

    autoLoad: 'true',


    sorters: [
        /*
           {
    property: 'age',
    direction: 'DESC'
},
         */
        {
            property: 'agence',
            direction: 'ASC'
        }
    ],



    /*
      filters: [{
        property: 'agence',
        value: /Peter/
    }]
    */


});