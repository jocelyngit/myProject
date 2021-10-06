Ext.define('MutrasstoApp.store.fournisseur.Fournisseur', {
    extend: 'Ext.data.Store',

    alias: 'store.fournisseur',

    requires: [
        'MutrasstoApp.model.fournisseur.Fournisseur',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.fournisseur.Fournisseur',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/fournisseur/findAll?classe=Fournisseur',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});