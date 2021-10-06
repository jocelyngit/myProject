Ext.define('MutrasstoApp.store.produitAffecter.ProduitAffecter', {
    extend: 'Ext.data.Store',

    alias: 'store.produitAffecter',

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
            type: 'memory',
            //url: 'http://localhost:8080/produit/findAll?classe=Produit',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});