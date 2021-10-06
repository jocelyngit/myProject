Ext.define('zonblewou.store.mesStore.Mois', {
    extend: 'Ext.data.Store',

    alias: 'store.mois',
    //autoLoad: true,
    /*
    Uncomment to use a specific model class
    model: 'User',
    */

    //Fields can also be declared without a model class:
    fields: ['code', 'mois'],

    //Uncomment to specify data inline
    data: [
        { code: '1', mois: 'Janvier' },
        { code: '2', mois: 'Février' },
        { code: '3', mois: 'Mars' },
        { code: '4', mois: 'Avril' },
        { code: '5', mois: 'Mai' },
        { code: '6', mois: 'Juin' },
        { code: '7', mois: 'Juillet'},
        { code: '8', mois: 'Août' },
        { code: '9', mois: 'Septembre' },
        { code: '10', mois: 'Octobre' },
        { code: '11', mois: 'Novembre' },
        { code: '12', mois: 'Décembre' }
    ]

});