/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MutrasstoApp.view.main.MainSecretaire', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-mainSecretaire',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MutrasstoApp.view.main.MainController',
        'MutrasstoApp.view.main.MainModel',
        'MutrasstoApp.view.main.List',
        'MutrasstoApp.view.session.*'
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
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'accueil'
            }]
        }, {
            title: 'Membres',
            iconCls: 'fa-users',
            items: [{
                xtype: 'mainMembre'
            }]
        }, {
            title: 'Cotisation',
            iconCls: 'fa-cart-arrow-down',
            /* bind: {
                 html: '{loremIpsum}'
             }*/
            //items: [{
            //    xtype: 'mainSession'
            //}]
        }, {
            title: 'Session',
            iconCls: 'fa-cart-arrow-down',
            /* bind: {
                 html: '{loremIpsum}'
             }*/
            items: [{
                xtype: 'mainSession'
            }]
        },
        {
            title: 'Commandes',
            iconCls: 'fa-shopping-cart',
            items: [{
                xtype: 'formulaireDeCommandes'
            }]
        }, {
            title: 'Assistances',
            iconCls: 'fa-envelope',
            items: [{
                xtype: 'mainAssistance'
            }]
        },
        /*{
                   title: 'Trésorerie',
                   iconCls: 'fa-balance-scale',
                   bind: {
                       html: '{loremIpsum}'
                   }
               },*/
        {
            title: 'Paramètres',
            iconCls: 'fa-cog',
            items: [{
                xtype: 'page-accueil-parametre'
            }]
        }
    ]
});