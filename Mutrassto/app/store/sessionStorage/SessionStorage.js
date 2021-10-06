Ext.define('MutrasstoApp.store.sessionStorage.SessionStorage', {
    extend: 'Ext.data.Store',

    alias: 'store.sessionStorage',

    storeId: 'sessionStorageStore',

    batchOrder: 'create,update,destroy',

    requires: [
        'MutrasstoApp.model.sessionStorage.SessionStorage'
        //'Ext.data.proxy.JsonP'
    ],


    config: {
        model: 'MutrasstoApp.model.sessionStorage.SessionStorage',

        proxy: {
            type: 'sessionstorage',
            id: 'idsessionStorageKey'

            /*reader: {
                type: 'json',
                rootProperty: 'items'
            }*/
        }

    },

    create: function(record) {
        this.add(record);
    },

    //destroy: function() {
    //    this.remove();
    //}
});