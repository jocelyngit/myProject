Ext.define('zonblewou.view.mesPages.operations.retrait.RetraitFormulaire', {

    extend: 'Ext.form.Panel',

    xtype: 'retraitFormulaire',

    bodyPadding: 15,

    // requiered class
    requires: [
        'zonblewou.store.mesStore.ChoixOpp',

        'zonblewou.store.mesStore.TypeOperation',

        //'zonblewou.store.mesStore.Agence',

        'zonblewou.view.mesPages.operations.retrait.RetraitFormController'

    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'retraitform',

    defaults: {
        /*
         * Seek out the first enabled, focusable, empty textfield when the form is focused
         */
        defaultFocus: 'textfield:not([value]):focusable:not([disabled])',

        //defaultButton: 'nextbutton'
    },

    items: [{
            xtype: 'form',
            //title: 'REGULARISATION',
            reference: 'retraitFormRef',
            defaultType: 'textfield',
            //width: '100%',
            // autoScroll: true,

            // scrollable: true,

            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
            },

            items: [{
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },

                    defaults: {
                        labelAlign: 'top',
                        submitEmptyText: false,
                    },

                    items: [{
                            xtype: 'textfield',
                            emptyText: 'Numéro de compte',
                            reference: 'numCompteRetRef',
                            allowBlank: false,
                            fieldLabel: 'Numéro de compte',

                            name: 'numCompte',
                            blankText: 'Ce champ est obligatoire',
                            //vtype: 'alpha',

                            msgTarget: 'side',
                            //maskRe: /^[a-zA-Z0-9\-]{0,}$/,

                            maskRe: /^[0-9]{0,}$/,

                            listeners: {
                                change: function(field, newValue) {

                                    newValue = newValue.toUpperCase();

                                    this.setValue(newValue);

                                }
                            }

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            // xtype: 'container',
                            // layout: {
                            //type: 'hbox',
                            // },

                            items: [{
                                xtype: 'button',
                                //reference: 'btnEnregUserRef',
                                //margin: 15,
                                scale: 'small',
                                ui: 'green',
                                iconAlign: 'left',
                                iconCls: 'x-fa fa-search',

                                listeners: {
                                    click: 'onSearchNumcompteRetButtonClick'
                                }

                            }]
                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'hiddenfield',
                            reference: 'idCompteRetHiddenField',
                            name: 'idCompte',
                        },
                        {
                            xtype: 'hiddenfield',
                            reference: 'idMembreRetHiddenField',
                            name: 'idMembre',
                        },
                        /*
                            {
                            xtype: 'hiddenfield',
                            reference: 'idUserHiddenField',
                            name: 'idMembre',
                        },
                        
                          */

                        {
                            xtype: 'textfield',
                            emptyText: 'Titulaire',
                            reference: 'nomMembreRetRef',
                            //allowBlank: false,
                            fieldLabel: 'Titulaire du Compte',
                            name: 'titulaireCompte',
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        /*
                          {
                            xtype: 'textfield',
                            emptyText: 'Prénoms',
                            reference: 'prenomMembreRetRef',
                            //allowBlank: false,
                            fieldLabel: 'Prénom du titulaire',
                            name: 'prenomMembre',
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        */
                        {
                            xtype: 'textfield',
                            emptyText: 'Mise',
                            reference: 'miseRetRef',
                            //allowBlank: false,
                            fieldLabel: 'Mise',
                            name: 'mise',
                            width: 100,
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Solde Compte',
                            emptyText: 'Solde Compte',
                            reference: 'soldeRetRef',
                            //allowBlank: false,
                            name: 'solde',
                            //blankText: 'Ce champ est obligatoire',
                            //msgTarget: 'side',
                            //maxValue: 100000,
                            //minValue: 0,

                            readOnly: true,
                            // Remove spinner buttons, and arrow key and mouse wheel listeners
                            hideTrigger: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'OCT',
                            reference: 'octRetRef',
                            //allowBlank: false,
                            fieldLabel: 'O.C.Terme',
                            name: 'oct',
                            width: 125,
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'OMT',
                            reference: 'omtRetRef',
                            //allowBlank: false,
                            fieldLabel: 'O.M.Terme',
                            name: 'omt',
                            width: 125,
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'OLT',
                            reference: 'oltRetRef',
                            //allowBlank: false,
                            fieldLabel: 'O.L.Terme',
                            name: 'olt',
                            width: 125,
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        }

                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                    },

                    defaults: {
                        labelAlign: 'top',
                    },

                    items: [

                        {
                            xtype: 'textfield',
                            emptyText: 'Montant R.',
                            reference: 'mtRecupRetRef',
                            //allowBlank: false,
                            fieldLabel: 'Montant Récupérable',
                            name: 'mtRec',
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Marketeur',
                            reference: 'marketeurRetRef',
                            //allowBlank: false,
                            fieldLabel: 'Marketeur',
                            name: 'marketeur',
                            editable: false,
                            readOnly: true,
                            //blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'combo',
                            emptyText: 'Type d\'Opération',
                            allowBlank: false,
                            fieldLabel: 'Type d\'Opération',
                            name: 'idTypeOperation',
                            blankText: 'Ce champ est obligatoire',
                            store: {
                                type: 'typeoperation',
                                autoLoad: true
                            },
                            queryMode: 'local',
                            displayField: 'typeOperation',
                            valueField: 'id',
                            editable: false,
                            msgTarget: 'side',
                            listeners: {
                                //This event will fire when combobox rendered completely
                                afterrender: function() {
                                    //So now we are going to set the combobox value here.
                                    //I just simply used my default value in the combobox definition but it's possible to query from combobox store also.
                                    //For example: store.getAt('0').get('id'); according to Brik's answer.
                                    this.setValue(this.defaultValue);
                                }
                            }

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'combo',
                            emptyText: 'Type d\'Opportunite',
                            allowBlank: false,
                            fieldLabel: 'Type d\'Opportunite',
                            name: 'typeOpp',
                            blankText: 'Ce champ est obligatoire',
                            store: {
                                type: 'choixopp',
                                autoLoad: true
                            },
                            queryMode: 'local',
                            displayField: 'valeur',
                            valueField: 'code',
                            editable: false,
                            msgTarget: 'side'

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },

                        {
                            xtype: 'numberfield',
                            emptyText: 'Mt à Retirer',
                            fieldLabel: 'Mt. à Retirer',
                            //reference: 'miseRegRef',
                            allowBlank: false,
                            name: 'montantOperation',
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
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {

                            xtype: 'datefield',
                            emptyText: 'Date d\'opération',
                            fieldLabel: 'Date d\'opération',
                            allowBlank: false,
                            name: 'dateOperation',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',

                            editable: false,

                            readOnly: true,

                            maxValue: new Date(),

                            minValue: new Date(),

                            value: new Date(),

                            format: 'd/m/Y',

                            submitFormat: 'Y/m/d'

                            //submitFormat: 'Y/m/d H:i:s'
                        },

                        {
                            xtype: 'tbspacer',
                            width: 7
                        },

                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    items: [{
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            // align: 'center
                        },

                        items: [{
                                xtype: 'button',
                                margin: 15,
                                //reference: 'btnEnregUserRef',
                                scale: 'small',
                                ui: 'green',
                                iconAlign: 'left',
                                iconCls: 'x-fa fa-save',
                                text: 'Valider',
                                formBind: true,
                                listeners: {
                                    click: 'onValiderRetButtonClick'
                                }
                            },
                            {
                                xtype: 'button',
                                margin: 15,
                                //reference: 'btnEnregUserRef',
                                scale: 'small',
                                ui: 'green',
                                iconAlign: 'left',
                                iconCls: 'x-fa fa-close',
                                text: 'Annuler',
                                listeners: {
                                    click: 'onAnnulerRetButtonClick'
                                }

                            }
                        ]

                    }]
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