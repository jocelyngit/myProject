Ext.define('zonblewou.store.mesStore.DepotMarketeur', {

    extend: 'Ext.data.Store',

    alias: 'store.depotmarketeur',

    model: 'zonblewou.model.mesModeles.DepotMarketeur',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/depotMarketeur/findAll?classe=DepotMarketeur',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },

    autoLoad: 'true'

    /*
      sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
    */

});