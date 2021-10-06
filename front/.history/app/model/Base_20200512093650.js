Ext.define('zonblewou.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.reader.json',
        'Ext.data.writer.json',

    ],

    schema: {
        namespace: 'zonblewou.model'
    }
});