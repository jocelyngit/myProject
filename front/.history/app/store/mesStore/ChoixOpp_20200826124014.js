Ext.define('zonblewou.store.mesStore.ChoixOpp', {
    extend: 'Ext.data.Store',

    alias: 'store.choixopp',
    //autoLoad: true,
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    //Fields can also be declared without a model class:
    fields: ['code', 'valeur'],

    //Uncomment to specify data inline
    data: [
        { code: 'oct', valeur: 'O.C.T' },
        { code: 'omt', valeur: 'O.M.T' },
        { code: 'olt', valeur: 'O.L.T' }
    ]

});