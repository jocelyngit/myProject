Ext.define('MutrasstoApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',


    onLoginClick: function() {

        var form = this.up('form').getForm();

        var d = form.getValues();

        console.log(d);

        var url = 'http://localhost:8080/login/seConnecter'

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
                if (response == true) {

                    this.getView().destroy();

                    Ext.create({
                        xtype: 'app-main'
                    });

                }
                //else{

                //}
                //console.log('success');

            },

            failure: function(response) {
                Ext.Msg.alert('DESOLE', 'SERVEUR INACESSIBLE OU PROBLEME AVEC LE SERVEUR !');
                console.log('echec');
            }

        })

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        //localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        //this.getView().destroy();

        // Add the main view to the viewport
        //Ext.create({
        //    xtype: 'app-main'
        //});

    }

});