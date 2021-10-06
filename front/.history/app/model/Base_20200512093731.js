Ext.define('zonblewou.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',

    ],

    schema: {
        namespace: 'zonblewou.model'
    }
});