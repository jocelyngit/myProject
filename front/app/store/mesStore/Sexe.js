Ext.define('zonblewou.store.mesStore.Sexe', {
    extend: 'Ext.data.Store',

    alias: 'store.sexe',
    //autoLoad: true,
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    //Fields can also be declared without a model class:
    fields: ['code', 'valeur'],

    //Uncomment to specify data inline
    data: [
        { code: 'F', valeur: 'Féminin' },
        { code: 'M', valeur: 'Masculin' }
    ]

});