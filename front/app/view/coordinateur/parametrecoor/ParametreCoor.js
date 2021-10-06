Ext.define('zonblewou.view.coordinateur.parametrecoor.ParametreCoor', {

    extend: 'Ext.tab.Panel',

    xtype: 'parametrecoor',

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

    items: [
        /*{
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

         */
        /*{
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

         */
        {
            title: 'Agent Marketing',
            border: false,
            xtype: 'agMarketingContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Agent Marketing'
            }
        },
        /*{
            title: 'Type d\'opération',
            border: false,
            xtype: 'tOperationContainer',
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Type d\'opération'
            }
        },*

         */
        {
            title: 'Zone',
            border: false,
            cls: 'wizardtwo shadow',
            colorScheme: 'soft-purple',
            xtype: 'zoneContainer',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Zone des agents marketing'
            }
        },
        /*{
            title: 'Agence',
            border: false,
            cls: 'wizardtwo shadow',
            xtype: 'agenceContainer',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Agence de la caisse'
            }
        },

         */
        {
            title: 'Profession',
            border: false,
            cls: 'wizardtwo shadow',
            xtype: 'professionContainer',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'Profession des membes'
            }
        },
        {
            title: 'Secteur d\'activité',
            border: false,
            cls: 'wizardtwo shadow',
            xtype: 'sectactiviteContainer',
            colorScheme: 'soft-purple',
            userCls: 'big-50 small-100',
            tabConfig: {
                //title: 'Custom Title',
                tooltip: 'secteurs d\'activités des membes'
            }
        }
    ]


});