Ext.define('zonblewou.model.faq.Category', {
    extend: 'zonblewou.model.Base',

    fields: [
        {
            type: 'string',
            name: 'name'
        }
    ],

    hasMany: {
        name: 'questions',
        model: 'faq.Question'
    }
});
