Ext.define('MutrasstoApp.store.parent.Parent', {
    extend: 'Ext.data.Store',

    alias: 'store.parent',

    requires: [
        'MutrasstoApp.model.parent.Parent',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parent.Parent',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/parent/findAll?classe=Parent',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});