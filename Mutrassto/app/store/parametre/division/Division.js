Ext.define('MutrasstoApp.store.parametre.division.Division', {
    extend: 'Ext.data.Store',

    alias: 'store.division',

    requires: [
        'MutrasstoApp.model.parametre.division.Division',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.division.Division',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/division/findAll?classe=Division',
            //findAll?&classe=ivision

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});