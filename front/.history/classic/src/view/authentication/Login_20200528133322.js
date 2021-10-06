Ext.define('zonblewou.view.authentication.Login', {
    extend: 'zonblewou.view.authentication.LockingWindow',

    xtype: 'login',

    //itemId: 'loginItemId',

    requires: [
        'zonblewou.view.authentication.Dialog',
        'Ext.container.Container',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.button.Button',
    ],

    //title: 'Let\'s Log In',
    title: 'Connexion',
    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus as well

    items: [{
        xtype: 'authdialog',
        defaultButton: 'loginButton',
        autoComplete: true,
        reference: 'loginFormRef',
        bodyPadding: '20 20',
        cls: 'auth-dialog-login',
        header: false,
        width: 415,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        defaults: {
            margin: '5 0'
        },

        items: [{
                xtype: 'label',
                //text: 'Sign into your account'
                text: 'Connectez-vous à votre compte'
            },
            {
                xtype: 'textfield',
                cls: 'auth-textbox',
                name: 'login',
                reference: 'usernameloginFieldRef',
                bind: '',
                height: 55,
                hideLabel: true,
                allowBlank: false,
                emptyText: 'Identifiant',
                triggers: {
                    glyphed: {
                        cls: 'trigger-glyph-noop auth-email-trigger'
                    }
                }
            },
            {
                xtype: 'textfield',
                cls: 'auth-textbox',
                height: 55,
                hideLabel: true,
                emptyText: 'Mot de passe',
                inputType: 'password',
                reference: 'passwordloginFieldRef',
                name: 'password',
                bind: '',
                allowBlank: false,
                triggers: {
                    glyphed: {
                        cls: 'trigger-glyph-noop auth-password-trigger'
                    }
                }
            },
            {
                xtype: 'displayfield',
                name: 'loginDisplayField',
                //itemId: 'idLoginDisplayField'
                reference: 'loginDisplayFieldRef'
                    //value: 'Enter un mode passe valide'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [{
                        xtype: 'checkboxfield',
                        flex: 1,
                        cls: 'form-panel-font-color rememberMeCheckbox',
                        height: 30,
                        bind: '',
                        //boxLabel: 'Remember me'
                        boxLabel: 'Souvenir de moi'

                    },
                    /*
                      {
                        xtype: 'box',
                        //html: '<a href="#passwordreset" class="link-forgot-password"> Forgot Password ?</a>'
                        html: '<a href="#passwordreset" class="link-forgot-password"> Mot de passe oublié ?</a>'

                    }
                    */

                ]
            },
            {
                xtype: 'button',
                reference: 'loginButton',
                scale: 'large',
                ui: 'soft-green',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                text: 'Login',
                formBind: true,
                listeners: {
                    click: 'onLoginButton'
                }
            },

            //Autre information à cacher

            /*
            *
            *
                
            {
                xtype: 'box',
                html: '<div class="outer-div"><div class="seperator">OR</div></div>',
                margin: '10 0'
            },
            {
                xtype: 'button',
                scale: 'large',
                ui: 'facebook',
                iconAlign: 'right',
                iconCls: 'x-fa fa-facebook',
                text: 'Login with Facebook',
                listeners: {
                    click: 'onFaceBookLogin'
                }
            },
            {
                xtype: 'box',
                html: '<div class="outer-div"><div class="seperator">OR</div></div>',
                margin: '10 0'
            },
            {
                xtype: 'button',
                scale: 'large',
                ui: 'gray',
                iconAlign: 'right',
                iconCls: 'x-fa fa-user-plus',
                text: 'Create Account',
                listeners: {
                    click: 'onNewAccount'
                }
            }

            **
            */
        ]
    }],

    initComponent: function() {
        this.addCls('user-login-register-container');
        this.callParent(arguments);
    }
});