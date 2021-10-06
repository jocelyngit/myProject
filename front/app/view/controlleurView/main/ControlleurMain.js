Ext.define('zonblewou.view.controlleurView.main.ControlleurMain', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree'
    ],

    controller: 'controlleurmain',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    listeners: {
        render: 'onMainViewRender'
    },

    items: [{
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            items: [{
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    // html: '<div class="main-logo"><img src="resources/images/company-logo.png">Sencha</div>',
                    html: '<div class="main-logo"><img src="resources/images/company-logo.png">Zomblewou</div>',
                    width: 50
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls: 'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                '->',
                {
                    xtype: 'segmentedbutton',
                    margin: '0 16 0 0',

                    platformConfig: {
                        ie9m: {
                            hidden: true
                        }
                    },

                    // contenu à cacher
                    /*
                    *
                    *
                    items: [{
                        iconCls: 'x-fa fa-desktop',
                        pressed: true
                    }, {
                        iconCls: 'x-fa fa-tablet',
                        handler: 'onSwitchToModern',
                        tooltip: 'Switch to modern toolkit'
                    }]

                    *
                    *
                    */
                },

                /*
                {
                    iconCls: 'x-fa fa-search',
                    ui: 'header',
                    href: '#searchresults',
                    hrefTarget: '_self',
                    tooltip: 'See latest search'
                },
                {
                    iconCls: 'x-fa fa-envelope',
                    ui: 'header',
                    href: '#email',
                    hrefTarget: '_self',
                    tooltip: 'Check your email'
                },
                {
                    iconCls: 'x-fa fa-question',
                    ui: 'header',
                    href: '#faq',
                    hrefTarget: '_self',
                    tooltip: 'Help / FAQ\'s'
                },


                {
                    iconCls: 'x-fa fa-th-large',
                    ui: 'header',
                    href: '#profile',
                    hrefTarget: '_self',
                    tooltip: 'See your profile'
                },
                {
                    xtype: 'tbtext',
                    text: 'Goff Smith',
                    cls: 'top-user-name'
                },

                 */
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt: 'current user image',
                    src: 'resources/images/profile-icon.png'
                }


            ]
        },
        {
            xtype: 'controlleurmaincontainerwrap',
            id: 'controlleurmain-view-detail-wrap',
            reference: 'controlleurMainContainerWrapRef',
            flex: 1,
            items: [{
                    xtype: 'treelist',
                    reference: 'controlleurnavigationTreeList',
                    itemId: 'controlleurnavigationTreeList',
                    ui: 'navigation',
                    store: 'ControlleurNavigationTree',
                    width: 250,
                    expanderFirst: false,
                    expanderOnly: false,
                    listeners: {
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});