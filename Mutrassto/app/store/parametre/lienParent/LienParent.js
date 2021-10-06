Ext.define('MutrasstoApp.store.parametre.lienParent.LienParent', {
    extend: 'Ext.data.Store',

    alias: 'store.lienParent',

    requires: [
        'MutrasstoApp.model.parametre.lienParent.LienParent',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.lienParent.LienParent',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/lienParent/findAll?classe=LienParent',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});