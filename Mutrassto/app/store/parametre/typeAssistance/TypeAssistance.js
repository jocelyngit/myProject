Ext.define('MutrasstoApp.store.parametre.typeAssistance.TypeAssistance', {
    extend: 'Ext.data.Store',

    alias: 'store.typeAssistance',

    requires: [
        'MutrasstoApp.model.parametre.typeAssistance.TypeAssistance',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.typeAssistance.TypeAssistance',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/typeAssistance/findAll?classe=TypeAssistance',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});