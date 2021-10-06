Ext.define('zonblewou.store.mesStore.CompteDeDepot', {

    extend: 'Ext.data.Store',

    alias: 'store.comptededepot',

    model: 'zonblewou.model.mesModeles.CompteDeDepot',

    proxy: {
        type: 'jsonp',
        url: 'http://localhost:8000/api/compteDeDepot/findAll?classe=CompteDeDepot',

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