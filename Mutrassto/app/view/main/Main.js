/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MutrasstoApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    scroll: true,
    autoScrool: true,

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MutrasstoApp.view.main.MainController',
        'MutrasstoApp.view.main.MainModel',
        'MutrasstoApp.view.main.List',
        'MutrasstoApp.view.session.*',
        'MutrasstoApp.view.session.MainSessionPresident'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Déconnexion',
            margin: '10 0',
            handler: 'onLogoutBtnClick'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
            title: 'Accueil',
            iconCls: 'fa-home',
            items: [{
                xtype: 'accueil',

            }]

        }, {
            title: 'Session',
            iconCls: 'fa-cart-arrow-down',
            items: [{
                xtype: 'mainSessionPresident'
            }]
        },
        {
            title: 'Commandes',
            iconCls: 'fa-shopping-cart',
            items: [{
                xtype: 'formulaireDeCommandes'
            }]

        }, {
            title: 'Membres',
            iconCls: 'fa-users',
            items: [{
                xtype: 'mainMembrePresident'
            }]
        }, {
            title: 'Assistances',
            iconCls: 'fa-envelope',
            items: [{
                xtype: 'mainAssistancePresident'
            }]

        }, {
            title: 'Trésorerie',
            iconCls: 'fa-balance-scale',
            items: [{
                xtype: 'mainTresoreriePresident'
            }]
        }
        /* {
            title: 'Paramètres',
            iconCls: 'fa-cog',
            items: [{
                xtype: 'page-accueil-parametre'
            }]
        }*/
    ]


});