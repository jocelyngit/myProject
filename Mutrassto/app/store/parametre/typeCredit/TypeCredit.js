Ext.define('MutrasstoApp.store.parametre.typeCredit.TypeCredit', {
    extend: 'Ext.data.Store',

    alias: 'store.typeCredit',

    requires: [
        'MutrasstoApp.model.parametre.typeCredit.TypeCredit',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.typeCredit.TypeCredit',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/typeCredit/findAll?classe=TypeCredit',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});