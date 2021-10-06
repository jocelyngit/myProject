Ext.define('zonblewou.view.mesPages.membres.MembreWinForm', {
    extend: 'Ext.window.Window',

    alias: 'widget.membrewinform',

    //autoScroll: true,

    resizable: false,

    bodyPadding: 5,

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

    closable: true,
    modal: true,
    layout: 'fit',

    floating: true,
    width: 350,
    scrollable: true,



    /*
      viewModel: { 
        type : 'membregridviewmodel',
},
    */

    items: [{
        //layout: 'fit',
        xtype: 'membreFormulaire'
    }]

});