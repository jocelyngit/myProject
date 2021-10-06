Ext.define('zonblewou.view.mesPages.compte.Comptes', {

    extend: 'Ext.tab.Panel',

    xtype: 'comptes',

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
            title: 'Compte Zonblewou',
            border: false,
            xtype: 'compteContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Dépôt zonblewou'
            }
        },
        {
            title: 'Compte de dépôt',
            border: false,
            xtype: 'compteDepotContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'compte des agents Marketing'
            }
        },
        {
            title: 'Opportunités',
            border: false,
            xtype: 'oppListe',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Liste des opportunités'
            }
        },


    ]

});