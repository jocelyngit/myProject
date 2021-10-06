Ext.define('zonblewou.view.mesPages.membres.MembreWinForm', {
    extend: 'Ext.window.Window',

    alias: 'widget.membrewinform',

    autoScroll: true,
    //align: 'start',
    //autoSize: true,


    requires: [
        'zonblewou.view.mesPages.membres.MembreFormController',
        'zonblewou.view.mesPages.membres.MembreFormulaire',
        'Ext.util.Floating',
        'Ext.layout.container.Fit'
        //'MutrasstoApp.view.membre.MembreGridModel'

    ],

    contoller: 'membreform',

    defaultFocus: 'nomMembre',

    // we do not want to destroy window so we only hide it on close
    closeAction: 'close', //close
    modal: true,
    layout: 'fit',
    floating: true,
    width: 350,

    /*
      viewModel: { 
        type : 'membregridviewmodel',
},
    */

    items: [{
        layout: 'fit',
        xtype: 'membreFormulaire'
    }]

});