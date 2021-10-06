Ext.define('MutrasstoApp.store.parametre.profil.Profil', {
    extend: 'Ext.data.Store',

    alias: 'store.profil',

    requires: [
        'MutrasstoApp.model.parametre.profil.Profil',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.profil.Profil',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/profil/findAll?classe=Profil',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});