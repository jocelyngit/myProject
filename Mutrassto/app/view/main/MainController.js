/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MutrasstoApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requres: [
        'MutrasstoApp.store.sessionStorage.SessionStorage'
    ],

    onItemSelected: function(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    },

    onLogoutBtnClick: function() {
        // Remove the localStorage key/value

        sessionStorage.removeItem('idsessionStorageKey');

        //var d = lougout.getData();

        //var effaceStore = lougout.remove(donnee);

        //console.log(effaceStore);

        //console.log(donnee);
        //console.log(d);



        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },


    // AVANT D'AFFICHER 

    /* launch: function() {

         var noRender = {
             beforerender: function() {
                 console.log('Called');
                 return false;
             }
         }

     }*/

});