Ext.define('zonblewou.store.mesStore.CompteOpp', {

    extend: 'Ext.data.Store',

    alias: 'store.compteopp',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.CompteOpp',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/opportunite/allCompteOpp?classe=Opportunite',

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