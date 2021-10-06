Ext.define('zonblewou.store.mesStore.Caisse', {

    extend: 'Ext.data.Store',

    alias: 'store.caisse',

    storeId: 'caisseStoreId',

    model: 'zonblewou.model.mesModeles.Caisse',

    //pageSize: 25,

   /* proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    */


    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/compte/soldeCaisse?classe=Compte',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },



   autoLoad: true,
    autoSync: true

    /*
      sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
    */

});