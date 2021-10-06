Ext.define('MutrasstoApp.store.parametre.categorie.Categorie', {
    extend: 'Ext.data.Store',

    alias: 'store.categorie',

    requires: [
        'MutrasstoApp.model.parametre.categorie.Categorie',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.categorie.Categorie',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/categorie/findAll?classe=Categorie',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});