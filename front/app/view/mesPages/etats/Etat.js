Ext.define('zonblewou.view.mesPages.etats.Etat', {

    extend: 'Ext.tab.Panel',

    xtype: 'etat',

    layout: 'responsivecolumn',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'zonblewou.view.mesPages.etats.EtatListeCotisation',
        'zonblewou.view.mesPages.etats.ListeCotisationController'

    ],

    //controller: 'membrefomr',
    //viewModel: {
    //    type: 'searchresults'
    //},

    cls: 'shadow',
    activeTab: 0,
    margin: 10,

    items: [{
            title: 'Cotisations',
            border: false,
            xtype: 'etatListeCotisation',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Listes des cotisations'
            }
        },
        {
            title: 'Commissions',
            border: false,
            xtype: 'commissionListe',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Les commissions'
            }
        }
        ,
        {
            title: 'Opérations - Dépôt',
            border: false,
            xtype: 'etatDepotListe',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Les dépôts'
            }
        }
        ,
        {
            title: 'Opérations - Retrait',
            border: false,
            xtype: 'etatRetraitListe',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Les retraits'
            }
        },
        {
            title: 'Comptes - Opportunités',
            border: false,
            xtype: 'compteoppListe',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Situations des comptes'
            }
        }
        ,
        {
            title: 'Caisses',
            border: false,
            xtype: 'etatCaisse',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'situation de la caisse zomblewou'
            }
        }


    ]


});