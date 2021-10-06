Ext.define('MutrasstoApp.view.accueil.Accueil', {
    extend: 'Ext.Container',

    xtype: 'accueil',
    //autoScroll: true,

    layout: {
        type: 'vbox',
        align: 'start'
    },


    items: [{
            xtype: 'mutrasstoAccueilPanel',
            bodyStyle: {
                background: 'cyan',
                bold: true,
                padding: '50px',
            },
            width: '100%',
            responsiveConfig: {
                tall: {
                    headerPosition: 'top'
                },
                wide: {
                    headerPosition: 'right'
                }
            },
        },
        {
            layout: 'hbox',

            items: [{
                xtype: 'accueilPanelSecond',
                //padding: '100px',
                flex: 1,

            }, {
                xtype: 'imgAccueil',
                //padding: '100px',
                flex: 1

            }]

        }
    ]


});