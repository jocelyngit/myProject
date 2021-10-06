Ext.define('MutrasstoApp.store.commander.Commander', {
    extend: 'Ext.data.Store',
    singleton: true,

    alias: 'store.commander',

    requires: [
        'MutrasstoApp.model.commander.Commander',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.commander.Commander',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/commander/list',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});