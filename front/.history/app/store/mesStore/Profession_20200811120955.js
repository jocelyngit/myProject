Ext.define('zonblewou.store.mesStore.Profession', {

    extend: 'Ext.data.Store',

    alias: 'store.profession',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.Profession',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/profession/findAll?classe=Profession',

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
            property: 'profession',
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