Ext.define('zonblewou.model.email.Friend', {
    extend: 'zonblewou.model.Base',

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'name'
        },
        {
            type: 'string',
            name: 'thumbnail'
        },
        {
            type: 'boolean',
            name: 'online'
        }
    ]
});
