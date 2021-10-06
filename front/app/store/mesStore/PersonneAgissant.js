Ext.define('zonblewou.store.mesStore.PersonneAgissant', {
    extend: 'Ext.data.Store',

    alias: 'store.personneagissant',
    //autoLoad: true,
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    //Fields can also be declared without a model class:
    fields: ['code', 'valeur'],

    //Uncomment to specify data inline
    data: [
        { code: 'LUI-MÊME', valeur: 'LUI-MÊME' },
        { code: 'AUTRES PERSONNES', valeur: 'AUTRES PERSONNES' }
    ]

});