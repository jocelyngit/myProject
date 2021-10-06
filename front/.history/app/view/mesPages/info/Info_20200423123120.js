Ext.define('zonblewou.view.mesPages.parametre.Parametre', {

    extend: 'Ext.tab.Panel',

    xtype: 'parametre',

    layout: 'responsivecolumn',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'

    ],

    //controller: 'membrefomr',
    //viewModel: {
    //    type: 'searchresults'
    //},

    cls: 'shadow',
    activeTab: 0,
    margin: 10,

    items: [{
            title: 'Profil',
            border: false,
            xtype: 'profilContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Profil utilisateur'
            }
        },
        {
            title: 'Utilisateur',
            border: false,
            xtype: 'userContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Utilisateur zonblewou'
            }
        },
        {
            title: 'Type Operation',
            border: false,
            //xtype: 'membreContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Type d"opération'
            }
        },
        {
            title: 'Type Opportunité',
            border: false,
            //xtype: 'membreContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Type d"opportunité'
            }
        },
        {
            title: 'Zone',
            border: false,
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Zone des agents marketing'
            }
        },
        {
            title: 'Agence',
            border: false,
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Agence de la caisse'
            }
        }
    ]


});