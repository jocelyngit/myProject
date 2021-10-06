Ext.define('zonblewou.view.mesPages.operations.regularisation.CotisationFormulaire', {

    extend: 'Ext.form.Panel',

    xtype: 'cotisationFormulaire',

    bodyPadding: 5,

    //autoScroll: true,

    //scrollable: true,

    // requiered class
    requires: [
        //'zonblewou.store.mesStore.Profil',

        'zonblewou.store.mesStore.Membre',

        'zonblewou.store.mesStore.AgentMarketing',

        'zonblewou.store.mesStore.Compte',

        'zonblewou.view.mesPages.operations.regularisation.CotisationFormController'

    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'cotisationform',

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
            reference: 'cotisationFormRef',
            defaultType: 'textfield',
            //width: '100%',
            //autoScroll: true,

            //scrollable: true,

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

                            xtype: 'combo',
                            fieldLabel: 'Collecteur',
                            emptyText: 'Agent',

                            allowBlank: false,
                            name: 'idAgent',
                            blankText: 'Ce champ est obligatoire',
                            store: {
                                type: 'agentmarketing',
                                autoLoad: true
                            },
                            queryMode: 'local',
                            //displayField: 'nomMembre',
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
                            ),

                            listeners: {
                                select: 'onAgentComboRegularisationSelect'
                            }

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Montant',
                            reference: 'montantVerseRegRef',
                            id: 'montantVerseRegId',
                            fieldLabel: 'Montant versé',
                            allowBlank: false,
                            name: 'soldeDep',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',

                            editable: false,
                            readOnly: true,

                            width: 150

                        },
                        {
                            xtype: 'hiddenfield',
                            reference: 'idCompteDepHiddenField',
                            name: 'idCompteDep',
                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Reste',
                            reference: 'resteRegRef',
                            fieldLabel: 'Reste',
                            allowBlank: false,
                            name: 'reste',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',

                            editable: false,
                            readOnly: true,
                            width: 150

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Numéro de compte',
                            reference: 'numCompteRegRef',
                            allowBlank: false,
                            fieldLabel: 'Numéro de compte',

                            name: 'numCompte',
                            blankText: 'Ce champ est obligatoire',
                            //vtype: 'alpha',

                            msgTarget: 'side',
                            maskRe: /^[0-9\-]{0,}$/,

                            listeners: {
                                change: function(field, newValue) {

                                    newValue = newValue.toUpperCase();

                                    this.setValue(newValue);

                                }
                            }

                        },
                        {
                            xtype: 'hiddenfield',
                            reference: 'idCompteHiddenField',
                            name: 'idCompte',
                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },

                        {

                            xtype: 'button',
                            //reference: 'btnEnregUserRef',
                            scale: 'small',
                            ui: 'green',
                            iconAlign: 'left',
                            iconCls: 'x-fa fa-search',

                            listeners: {
                                click: 'onSearchRegButtonClick'
                            }

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'numberfield',
                            emptyText: 'Cotisation',
                            allowBlank: false,
                            fieldLabel: 'Montant cotisé',

                            name: 'montantCotisation',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',
                            //maxValue: 100000,
                            minValue: 300,
                            active: false,

                            // Remove spinner buttons, and arrow key and mouse wheel listeners
                            hideTrigger: true,
                            keyNavEnabled: false,
                            mouseWheelEnabled: false,

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {

                            xtype: 'datefield',
                            emptyText: 'Date de cotisation',
                            fieldLabel: 'Date de cotisation',
                            allowBlank: false,
                            name: 'dateCotisation',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',

                            editable: false,
                            //readOnly: true,

                            maxValue: new Date(),

                            minValue: new Date(),

                            value: new Date(),

                            format: 'd/m/Y',

                            submitFormat: 'Y/m/d'

                            //submitFormat: 'Y/m/d H:i:s'
                        },
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

                    items: [{
                            xtype: 'hiddenfield',
                            reference: 'idMembreHiddenField',
                            name: 'idMembre',
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Nom',
                            reference: 'nomMembreRegRef',
                            //allowBlank: false,
                            fieldLabel: 'Nom du titulaire',
                            name: 'nomMembre',
                            editable: false,
                            readOnly: true,
                            blankText: 'Ce champ est obligatoire',

                        },
                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Prénoms',
                            reference: 'prenomMembreRegRef',
                            //allowBlank: false,
                            fieldLabel: 'Prénom du titulaire',
                            name: 'prenomMembre',
                            editable: false,
                            readOnly: true,
                            blankText: 'Ce champ est obligatoire',

                        },

                        {
                            xtype: 'tbspacer',
                            width: 7
                        },
                        {
                            xtype: 'numberfield',
                            emptyText: 'Mise',
                            fieldLabel: 'Mise',
                            reference: 'miseRegRef',
                            //allowBlank: false,
                            name: 'mise',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',
                            //maxValue: 100000,
                            //minValue: 300,
                            //editable: false,
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
                            xtype: 'numberfield',
                            fieldLabel: 'Solde Compte',
                            emptyText: 'Solde Compte',
                            reference: 'soldeRegRef',
                            //allowBlank: false,
                            name: 'solde',
                            blankText: 'Ce champ est obligatoire',
                            msgTarget: 'side',
                            //maxValue: 100000,
                            minValue: 0,

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

                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    items: [

                        {
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
                                    text: 'Enregistrer',
                                    formBind: true,
                                    listeners: {
                                        click: 'onEnregRegButtonClick'
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
                                        click: 'onAnnulerRegButtonClick'
                                    }

                                }
                            ]

                        }
                    ]
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