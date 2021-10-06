Ext.define('zonblewou.view.mesPages.compte.OppFormulaire', {

    extend: 'Ext.form.Panel',

    xtype: 'oppFormulaire',

    //bodyPadding: 15,

    // requiered class
    requires: [
        //'zonblewou.store.mesStore.Profil',

        //'zonblewou.store.mesStore.Membre',

        //'zonblewou.store.mesStore.Agence',

        'zonblewou.view.mesPages.compte.OppFormController'

    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'oppform',

    defaults: {
        /*
         * Seek out the first enabled, focusable, empty textfield when the form is focused
         */
        defaultFocus: 'textfield:not([value]):focusable:not([disabled])',

        //defaultButton: 'nextbutton'
    },

    items: [{
            xtype: 'form',
            title: 'SAISIE DES OPPORTUNITES',
            reference: 'oppFormRef',
            defaultType: 'textfield',

            // ToolBars
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    //text: '<b>Ajouter</b>'

                    /*
                      HANDLER
                    */

                    handler: function() {

                        var form = this.up('form').getForm();

                        form.reset();

                    }
                }, ]
            }],

            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                width: '100%'
            },
            items: [{
                    xtype: 'textfield',
                    emptyText: 'Numéro de Compte',
                    allowBlank: false,
                    name: 'numCompte',
                    blankText: 'Ce champ est obligatoire',
                    msgTarget: 'side',

                    maskRe: /\d/,
                    //regex: /^\d{3}-\d{3}-\d{4}$/,
                    regex: /^([0-9]){10}$/,
                    //matcher: '/^[(+{1})|(00{1})]+([0-9]){7,10}$/'
                    regexText: 'format : 0000000000',

                    listeners: {
                        change: 'onOppFormSoldeChange'
                    }

                },
                {
                    xtype: 'numberfield',
                    emptyText: 'Solde',
                    allowBlank: false,
                    name: 'solde',
                    blankText: 'Ce champ est obligatoire',
                    msgTarget: 'side',
                    //maxValue: 100000,
                    //minValue: 300,
                    //value: rec.get('solde'),

                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                    hideTrigger: true,
                    keyNavEnabled: false,
                    mouseWheelEnabled: false
                },
                {
                    xtype: 'numberfield',
                    emptyText: 'OCT',
                    allowBlank: false,
                    name: 'oct',
                    blankText: 'Ce champ est obligatoire',
                    msgTarget: 'side',
                    //maxValue: 100000,
                    minValue: 300,

                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                    hideTrigger: true,
                    keyNavEnabled: false,
                    mouseWheelEnabled: false
                },
                {
                    xtype: 'numberfield',
                    emptyText: 'OMT',
                    allowBlank: false,
                    name: 'omt',
                    blankText: 'Ce champ est obligatoire',
                    msgTarget: 'side',
                    //maxValue: 100000,
                    minValue: 300,

                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                    hideTrigger: true,
                    keyNavEnabled: false,
                    mouseWheelEnabled: false
                },
                {
                    xtype: 'numberfield',
                    emptyText: 'OLT',
                    allowBlank: false,
                    name: 'olt',
                    blankText: 'Ce champ est obligatoire',
                    msgTarget: 'side',
                    //maxValue: 100000,
                    minValue: 300,

                    // Remove spinner buttons, and arrow key and mouse wheel listeners
                    hideTrigger: true,
                    keyNavEnabled: false,
                    mouseWheelEnabled: false
                },
                {
                    xtype: 'button',
                    //reference: 'btnEnregUserRef',
                    scale: 'small',
                    ui: 'green',
                    iconAlign: 'left',
                    iconCls: 'x-fa fa-save',
                    text: 'Enregistrer',
                    formBind: true,
                    listeners: {
                        click: 'onEnregOppButtonClick'
                    }

                }

            ],


        },
        // boutton


        /*{
            xtype: 'form',
            defaultType: 'textfield',
            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                anchor: '100%'
            },
            items: [{
                    emptyText: 'First Name'
                },
                {
                    emptyText: 'Last Name'
                },
                {
                    emptyText: 'Company'
                },
                {
                    xtype: 'fieldcontainer',
                    cls: 'wizard-form-break',
                    fieldLabel: 'MemberType',
                    defaultType: 'radiofield',
                    defaults: {
                        flex: 1
                    },
                    layout: 'hbox',
                    items: [{
                        boxLabel: 'Free',
                        name: 'MemberType',
                        inputValue: 'Free'
                    }, {
                        boxLabel: 'Personal',
                        name: 'MemberType',
                        inputValue: 'Perosnal'
                    }, {
                        boxLabel: 'Black',
                        name: 'MemberType',
                        inputValue: 'Business'
                    }]
                }
            ]
        },
        
        {
            xtype: 'form',
            defaultType: 'textfield',
            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                anchor: '100%'
            },
            items: [{
                    emptyText: 'Phone number'
                },
                {
                    emptyText: 'Address'
                },
                {
                    emptyText: 'City'
                },
                {
                    emptyText: 'Postal Code / Zip Code'
                }
            ]
        },
        {
            xtype: 'form',
            items: [{
                html: '<h2>Thank You</h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>'
            }]
        }
        */


    ],



    /*
    initComponent: function() {

        this.tbar = {
            reference: 'progress',
            defaultButtonUI: 'wizard-' + this.colorScheme,
            cls: 'wizardprogressbar',
            defaults: {
                //disabled: true,
                iconAlign: 'top'
            },
            layout: {
                pack: 'center'
            },
            items: [{
                    //step: 0,
                    iconCls: 'fa fa-plus',
                    pressed: true,
                    //enableToggle: true,
                    text: 'Ajouter'
                },
                {
                    //step: 1,
                    iconCls: 'fa fa-user',
                    //enableToggle: true,
                    text: 'Consulter',
                    itemIndex: 'consulter',

                    // listners
                    listeners: {
                        click: 'onTbarConsulterClick'
                    }
                }
                
                 {
                     step: 2,
                     iconCls: 'fa fa-home',
                     enableToggle: true,
                     text: 'Address'
                 },
                 {
                     step: 3,
                     iconCls: 'fa fa-heart',
                     enableToggle: true,
                     text: 'Finish'
                 }
                 
            ]
        };

        


        
        this.bbar = {
            reference: 'navigation-toolbar',
            margin: 8,
            items: [
                '->',
                {
                    text: 'Previous',
                    ui: this.colorScheme,
                    formBind: true,
                    bind: {
                        disabled: '{atBeginning}'
                    },
                    listeners: {
                        click: 'onPreviousClick'
                    }
                },
                {
                    text: 'Next',
                    ui: this.colorScheme,
                    formBind: true,
                    reference: 'nextbutton',
                    bind: {
                        disabled: '{atEnd}'
                    },
                    listeners: {
                        click: 'onNextClick'
                    }
                }
            ]
        };
        

        this.callParent();
    }
    */


});