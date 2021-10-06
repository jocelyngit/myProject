Ext.define('zonblewou.view.charts.Charts', {
    extend: 'Ext.container.Container',
    xtype: 'charts',

    requires: [
        'zonblewou.view.charts.Area',
        'zonblewou.view.charts.Bar',
        'zonblewou.view.charts.ChartsModel',
        'zonblewou.view.charts.Gauge',
        'zonblewou.view.charts.Pie3D',
        'zonblewou.view.charts.Polar',
        'zonblewou.view.charts.Stacked',
        'Ext.ux.layout.ResponsiveColumn'
    ],

    viewModel: {
        type: 'charts'
    },

    layout: 'responsivecolumn',

    defaults: {
        defaults: {
            animation : !Ext.isIE9m && Ext.os.is.Desktop
        }
    },

    items: [
        {
            xtype: 'chartsareapanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartspie3dpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartspolarpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsstackedpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsbarpanel',
            userCls: 'big-50 small-100'
        },
        {
            xtype: 'chartsgaugepanel',
            userCls: 'big-50 small-100'
        }
    ]
});
