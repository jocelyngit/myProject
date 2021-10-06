Ext.define('MutrasstoApp.store.prixProduit.PrixProduits', {
    extend: 'Ext.data.Store',

    alias: 'store.prixProduit',

    requires: [
        'MutrasstoApp.model.prixProduit.PrixProduits',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.prixProduit.PrixProduits',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/sessionProduit/findAll?classe=SessionProduit',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});