Ext.define('zonblewou.store.mesStore.AgentMarketing', {

    extend: 'Ext.data.Store',

    alias: 'store.agentmarketing',

    pageSize: 25,

    model: 'zonblewou.model.mesModeles.AgentMarketing',

    proxy: {
        type: 'jsonp',
        url: zonblewou.vars.AllVars.url + '/api/agentMarketing/findAll?classe=AgentMarketing',

        reader: {
            type: 'json',
            //rootProperty: 'data',
            rootProperty: 'records',
            totalProperty: 'total'
        }
    },

    autoLoad: 'true',

    /*
          sorters: {
            direction: 'ASC',
            property: 'nomUser'
        }
    */

});