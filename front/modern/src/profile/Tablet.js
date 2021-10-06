Ext.define('zonblewou.profile.Tablet', {
    extend: 'Ext.app.Profile',

    requires: [
        'zonblewou.view.tablet.*'
    ],

    // Map tablet/desktop profile views to generic xtype aliases:
    //
    views: {
        email: 'zonblewou.view.tablet.email.Email',
        inbox: 'zonblewou.view.tablet.email.Inbox',
        compose: 'zonblewou.view.tablet.email.Compose',

        searchusers: 'zonblewou.view.tablet.search.Users'
    },

    isActive: function () {
        return !Ext.platformTags.phone;
    }
});
