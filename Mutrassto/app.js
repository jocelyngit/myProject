/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MutrasstoApp.Application',

    name: 'MutrasstoApp',

    requires: [
        // This will automatically load all classes in the MutrasstoApp namespace
        // so that application classes do not need to require each other.
        'MutrasstoApp.*'
    ],

    // The name of the initial view to create.
    //mainView: 'MutrasstoApp.view.main.Main'
    //mainView: 'MutrasstoApp.view.main.MainSecretaire'
    //mainView: 'MutrasstoApp.view.main.MainMembre'
    //mainView: 'MutrasstoApp.view.main.MainTresorerie'

});