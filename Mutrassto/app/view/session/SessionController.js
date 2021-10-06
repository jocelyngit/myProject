Ext.define('MutrasstoApp.view.session.SessionController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.session',

    requires: [

        'MutrasstoApp.view.session.SessionGridModel',
        'MutrasstoApp.view.session.SessionModel',
        //'MutrasstoApp.view.session.SessionFormulaire'
    ],

    onSessionGridItemSelected: function() {

        var data = this.selectedRecords;

        return data ? selectedRecords.getRange() : [];

    }

    /* onSessionBtnEnregistrerClick: function() {

        var form = this.up('form').getForm();

        var d = form.getValues();

        console.log(d);

        var dt = JSON.stringify({ 'session': d });

        var url = 'http://localhost:8080/session/create?classe=Session&format=json'

        Ext.data.JsonP.request({

            params: d,

            url: url,

            writer: {
                type: 'json'
            },

            reader: {
                type: 'json'
            },

            callbackKey: 'callback',

            scope: 'this',

            success: function(response) {
                console.log('reponse');
                console.log(response);
                Ext.toast('Ennregistrement effectué avec succès', 'Title', 't')

                Ext.lookupReference

            },

            failure: function(response) {
                Ext.Msg.alert('DESOLE', 'SERVEUR INACESSIBLE OU PROBLEME AVEC LE SERVEUR !');
                console.log('echec');
            }
        })*/

});