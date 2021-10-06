Ext.define('zonblewou.store.faq.FAQ', {
    extend: 'Ext.data.Store',
    alias: 'store.faq',

    model: 'zonblewou.model.faq.Category',

    proxy: {
        type: 'api',
        url: '~api/faq/faq'
    }
});
