Ext.define('MutrasstoApp.store.parametre.situationMatrimoniale.SituationMatrimoniale', {
    extend: 'Ext.data.Store',

    alias: 'store.situationMatrimoniale',

    requires: [
        'MutrasstoApp.model.parametre.situationMatrimoniale.SituationMatrimoniale',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'MutrasstoApp.model.parametre.situationMatrimoniale.SituationMatrimoniale',
        autoLoad: true,
        buffered: true,
        pageSize: 100,
        leadingBufferZone: 1000,
        remoteFilter: false,

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/situationMatrimoniale/findAll?classe=SituationMatrimoniale',
            //findAll?&classe=Session

            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'total'
            }
        }

    }
});