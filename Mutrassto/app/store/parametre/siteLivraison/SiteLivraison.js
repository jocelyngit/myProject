Ext.define('MutrasstoApp.store.parametre.siteLivraison.SiteLivraison', {
    extend: 'Ext.data.Store',

    alias: 'store.siteLivraison',

    requires: [
        'MutrasstoApp.model.parametre.siteLivraison.SiteLivraison',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.siteLivraison.SiteLivraison',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/siteLivraison/findAll?classe=SiteLivraison',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});