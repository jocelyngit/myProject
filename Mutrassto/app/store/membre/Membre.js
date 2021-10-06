Ext.define('MutrasstoApp.store.membre.Membre', {
    extend: 'Ext.data.Store',

    alias: 'store.membre',

    requires: [
        'MutrasstoApp.model.membre.Membre',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.membre.Membre',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/membre/findAll?classe=Membre',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});