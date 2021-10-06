Ext.define('zonblewou.store.mesStore.SecteurActivite', {

    extend: 'Ext.data.Store',

    alias: 'store.secteuractivite',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.SecteurActivite',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/secteurActivite/findAll?classe=SecteurActivite',

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
            property: 'secteurActivite',
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