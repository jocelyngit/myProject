Ext.define('zonblewou.store.mesStore.SitMatrimoniale', {
    extend: 'Ext.data.Store',

    alias: 'store.sitmat',
    //autoLoad: true,
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    //Fields can also be declared without a model class:
    fields: ['code', 'valeur'],

    //Uncomment to specify data inline
    data: [
        { code: 'Célibataire', valeur: 'Célibataire' },
        { code: 'Marié(e)', valeur: 'Marié(e)' }
    ]

});