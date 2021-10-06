/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        //Ext: '.',
        'Ext.ux': 'ux'
            //'Packt.util': 'app/util'
    }
});


Ext.define('MutrasstoApp.Application', {
    extend: 'Ext.app.Application',

    name: 'MutrasstoApp',
    stores: [
        'MutrasstoApp.store.sessionStorage.SessionStorage'
    ],

    requires: [
        'Ext.tip.QuickTipManager'

    ],

    //quickTips: false,
    quickTips: true,

    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    splashscreen: {},

    // INITIALISATION DE L'APPLICATION
    init: function() {

        // Start the mask on the body and get a reference to the mask
        splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
        splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

        //console.log('init');
    },

    launch: function() {


        Ext.tip.QuickTipManager.init();

        //Fade out the body mask
        splashscreen.fadeOut({
            duration: 1000,
            remove: true
        });

        //  Fade out the icon and message

        /*var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        //Ext.widget('login');*/

        var loggedIn;
        // Check to see the current value of the localStorage key
        //loggedIn = localStorage.getItem("TutorialLoggedIn");
        loggedIn = sessionStorage.getItem('idsessionStorageKey');

        console.log(loggedIn);

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: 'login'
        });
    },

    //         }
    //   }
    // });

    // Ext.widget('mainviewport');
    //Ext.widget('login');

    //console.log('launch');
    //});

    // task.delay(2000);

    // It's important to note that this type of application could use
    // any type of storage, i.e., Cookies, LocalStorage, etc.


    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});