Ext.define('zonblewou.view.mesPages.membres.MembreFormulaire', {

    extend: 'Ext.window.Window',

    xtype: 'membreFormulaire',

    title: 'ENREGISTRER UN MEMBRE',

    bodyPadding: 15,

    width: 500,
    //height: 500,
    closable: true,
    closeAction: 'close',
    resizable: false,
    autoShow: true,
    titleAlign: 'center',
    //maximized: true,
    modal: true,
    layout: 'fit',

    requires: [
        'zonblewou.store.mesStore.Sexe',
        'zonblewou.store.mesStore.SitMatrimoniale',
        'zonblewou.store.mesStore.Profession',
        'zonblewou.store.mesStore.SecteurActivite',
        'zonblewou.store.mesStore.AgentMarketing',
        'zonblewou.view.mesPages.membres.MembreFormController',
        'Ext.form.field.Date'
    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'membreform',

    defaults: {
        /*
         * Seek out the first enabled, focusable, empty textfield when the form is focused
         */
        defaultFocus: 'textfield:not([value]):focusable:not([disabled])',

    },


    items: [{
            xtype: 'form',
            //title: 'ENREGISTRER UN MEMBRE',
            reference: 'formMembreRef',
            cls: 'wizard-form-break',
            defaultType: 'textfield',
            enableKeyEvents: true,

            items: [{
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },

                    defaults: {
                        labelWidth: 90,
                        labelAlign: 'top',
                        labelSeparator: '',
                        submitEmptyText: false,
                        margin: 10,
                        width: 250,

                    },

                    items: [{
                            xtype: 'textfield',
                            emptyText: 'Nom',
                            allowBlank: false,
                            name: 'nomMembre',
                            blankText: 'Ce champ est obligatoire',

                            msgTarget: 'side',

                            listeners: {
                                change: function(field, newValue) {

                                    newValue = newValue.toUpperCase();

                                    this.setValue(newValue);

                                }
                            }

                        },
                        {
                            xtype: 'tbspacer',
                            width: 15
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Prénoms',
                            allowBlank: false,
                            name: 'prenomMembre',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side'

                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },
                    defaults: {
                        labelWidth: 90,
                        labelAlign: 'top',
                        labelSeparator: '',
                        submitEmptyText: false,
                        margin: 10,
                        width: 250,
                        //width: '100%',
                    },
                    items: [{
                            xtype: 'combo',
                            emptyText: 'Sexe',
                            allowBlank: false,
                            name: 'sexe',
                            blankText: 'Ce champ est obligatoire',
                            store: {
                                type: 'sexe',
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
                            width: 15
                        },
                        {
                            xtype: 'combo',
                            emptyText: 'Sit. Matrimoniale',
                            allowBlank: false,
                            name: 'sitMatrimoniale',
                            blankText: 'Ce champ est obligatoire',
                            store: {
                                type: 'sitmat',
                                autoLoad: true
                            },
                            queryMode: 'local',
                            displayField: 'valeur',
                            valueField: 'code',
                            editable: false,
                            msgTarget: 'side',

                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },
                    defaults: {
                        labelWidth: 90,
                        labelAlign: 'top',
                        labelSeparator: '',
                        submitEmptyText: false,
                        margin: 10,
                        width: 250,
                        // width: '100%',
                    },
                    items: [
                        /**
                                               {
                                                   xtype: 'textfield',
                                                   emptyText: 'Profession / Fonction',
                                                   allowBlank: false,
                                                   name: 'profession',
                                                   blankText: 'Ce champ est obligatoire',
                                                   msgTarget: 'side',

                                                   listeners: {
                                                       change: function(field, newValue) {

                                                           newValue = newValue.toUpperCase();

                                                           this.setValue(newValue);

                                                       }
                                                   }
                                               },

                                               {
                                                   xtype: 'textfield',
                                                   emptyText: 'Secteur d\'activité',
                                                   allowBlank: false,

                                                   name: 'secteurActivite',
                                                   blankText: 'Ce champ est obligatoire',

                                                   msgTarget: 'side',

                                                   listeners: {
                                                       change: function(field, newValue) {

                                                           newValue = newValue.toUpperCase();

                                                           this.setValue(newValue);

                                                       }
                                                   }
                                               }
                                               */
                        {
                            xtype: 'combo',
                            emptyText: 'Profession / Fonction',
                            allowBlank: false,
                            name: 'idProfession',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',
                            store: {
                                type: 'profession',
                                autoLoad: true
                            },
                            queryMode: 'local',
                            displayField: 'profession',
                            valueField: 'id',
                            //editable: false,
                            lastQuery: '',
                            typeAhead: true,
                            typeAheadDelay: 100,
                            minChars: 2,



                        },
                        {
                            xtype: 'tbspacer',
                            width: 15
                        },

                        {
                            xtype: 'combo',
                            emptyText: 'Secteur d\'activité',
                            allowBlank: false,
                            name: 'idSecteur',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',
                            store: {
                                type: 'secteuractivite',
                                autoLoad: true
                            },
                            queryMode: 'local',
                            displayField: 'secteurActivite',
                            valueField: 'id',
                            //editable: false,
                            lastQuery: '',
                            typeAhead: true,
                            typeAheadDelay: 100,
                            minChars: 2,

                        },

                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },
                    defaults: {
                        labelWidth: 90,
                        labelAlign: 'top',
                        labelSeparator: '',
                        submitEmptyText: false,
                        margin: 10,
                        width: 250,
                        //width: '100%',
                    },
                    items: [{
                            xtype: 'textfield',
                            emptyText: 'Nationalité',
                            allowBlank: false,
                            name: 'nationalite',
                            blankText: 'Ce champ est obligatoire',
                            vtype: 'alpha',
                            msgTarget: 'side',

                            listeners: {
                                change: function(field, newValue) {

                                    newValue = newValue.toUpperCase();

                                    this.setValue(newValue);

                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 15
                        },
                        {
                            xtype: 'textareafield',
                            grow: true,
                            name: 'adresseMembre',
                            allowBlank: false,
                            emptyText: 'Adresse',
                            blankText: 'Ce champ est obligatoire',
                            //vtype: 'alphanum',
                            msgTarget: 'side',
                            //maskRe: /^[a-zA-Z0-9\ \,]{0,}$/,
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },
                    defaults: {
                        labelWidth: 90,
                        labelAlign: 'top',
                        labelSeparator: '',
                        submitEmptyText: false,
                        margin: 10,
                        width: 250,
                        //width: '100%',
                    },
                    items: [{
                            xtype: 'textfield',
                            emptyText: 'Téléphone',
                            allowBlank: false,
                            name: 'telMembre',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',
                            maskRe: /\d/,
                            //regex: /^\d{3}-\d{3}-\d{4}$/,
                            regex: /^([0-9]){8}$/,
                            //matcher: '/^[(+{1})|(00{1})]+([0-9]){7,10}$/'
                            regexText: 'format : 00000000'

                        },
                        {
                            xtype: 'tbspacer',
                            width: 15
                        },
                        {
                            xtype: 'datefield',
                            emptyText: 'Date d\'adhésion',
                            allowBlank: false,
                            name: 'dateAdhesion',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',

                            editable: false,

                            maxValue: new Date(),

                            minValue: '08/04/2019',

                            format: 'd/m/Y',

                            submitFormat: 'Y/m/d H:i:s'


                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },
                    defaults: {
                        labelWidth: 90,
                        labelAlign: 'top',
                        labelSeparator: '',
                        submitEmptyText: false,
                        margin: 10,
                        width: 250,
                        //width: '100%',
                    },
                    items: [{
                            xtype: 'numberfield',
                            emptyText: 'Mise',
                            //allowBlank: false,
                            name: 'mise',
                            //blankText: 'Ce champ est obligatoire',
                            //msgTarget: 'side',
                            //maxValue: 100000,
                            minValue: 300,

                            hideTrigger: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false

                        },
                        {
                            xtype: 'tbspacer',
                            width: 15
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Projet d\'avenir',
                            //allowBlank: false,
                            name: 'projetAvenir',
                            //blankText: 'Ce champ est obligatoire',
                            //msgTarget: 'side',

                            listeners: {
                                change: function(field, newValue) {

                                    newValue = newValue.toUpperCase();

                                    this.setValue(newValue);

                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        //align: 'strech'
                    },
                    defaults: {
                        labelWidth: 90,
                        labelAlign: 'top',
                        labelSeparator: '',
                        submitEmptyText: false,
                        margin: 10,
                        width: 250,
                        //width: '100%',
                    },
                    items: [{
                            xtype: 'numberfield',
                            emptyText: 'Durée du projet',
                            //allowBlank: false,
                            name: 'dureeProjet',
                            //blankText: 'Ce champ est obligatoire',
                            //msgTarget: 'side',
                            //maxValue: 20,
                            minValue: 0,

                            hideTrigger: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false

                        },
                        {
                            xtype: 'tbspacer',
                            width: 15
                        },
                        {
                            xtype: 'combo',
                            emptyText: 'Agent Marketing',
                            allowBlank: false,
                            name: 'idMarketeur',
                            blankText: 'Ce champ est obligatoire',
                            store: {
                                type: 'agentmarketing',
                                autoLoad: true
                            },
                            queryMode: 'local',
                            displayField: 'nomAg',
                            valueField: 'id',
                            editable: false,
                            msgTarget: 'side',

                            tpl: Ext.create('Ext.XTemplate',
                                '<ul class="x-list-plain"><tpl for=".">',
                                '<li role="option" class="x-boundlist-item">{nomAg} {prenomAg}</li>',
                                '</tpl></ul>'
                            ),
                            // template for the content inside text field
                            displayTpl: Ext.create('Ext.XTemplate',
                                '<tpl for=".">',
                                '{nomAg} {prenomAg}',
                                '</tpl>'
                            )
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },

                    items: [{
                        xtype: 'button',
                        margin: 20,
                        reference: 'btnEnregMembreRef',
                        scale: 'small',
                        ui: 'green',
                        iconAlign: 'left',
                        iconCls: 'x-fa fa-save',
                        text: 'Enregistrer',
                        formBind: true,
                        listeners: {
                            click: 'onEnregMembreButtonClick'
                        }

                    }]
                }



            ]

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