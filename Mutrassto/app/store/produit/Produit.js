Ext.define('MutrasstoApp.store.produit.Produit', {
    extend: 'Ext.data.Store',

    alias: 'store.produit',

    requires: [
        'MutrasstoApp.model.produit.Produit',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.produit.Produit',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/produit/findAll?classe=Produit',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});