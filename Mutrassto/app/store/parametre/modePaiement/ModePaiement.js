Ext.define('MutrasstoApp.store.parametre.modePaiment.ModePaiment', {
    extend: 'Ext.data.Store',

    alias: 'store.modePaiment',

    requires: [
        'MutrasstoApp.model.parametre.modePaiement.ModePaiement',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.modePaiement.ModePaiement',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/modePaiment/findAll?classe=ModePaiment',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});