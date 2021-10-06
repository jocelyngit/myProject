Ext.define('MutrasstoApp.store.commande.Commande', {
    extend: 'Ext.data.Store',

    alias: 'store.commande',

    requires: [
        'MutrasstoApp.model.commande.Commande',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.commande.Commande',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/commande/findAll?classe=Commande',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});