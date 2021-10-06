Ext.define('MutrasstoApp.store.session.Session', {
    extend: 'Ext.data.Store',

    alias: 'store.session',

    requires: [
        'MutrasstoApp.model.session.Session',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.session.Session',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/session/findAll?classe=Session',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});