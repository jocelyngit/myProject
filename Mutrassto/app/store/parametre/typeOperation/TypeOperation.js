Ext.define('MutrasstoApp.store.parametre.typeOperation.TypeOperation', {
    extend: 'Ext.data.Store',

    alias: 'store.typeOperation',

    requires: [
        'MutrasstoApp.model.parametre.typeOperation.TypeOperation',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.typeOperation.TypeOperation',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/typeOperation/findAll?classe=TypeOperation',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});