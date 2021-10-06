Ext.define('zonblewou.view.mesPages.parametre.agentMarketing.AgMarketingFormulaire', {

    extend: 'Ext.form.Panel',

    xtype: 'agentMarketingFormulaire',

    //bodyPadding: 15,

    // requiered class
    requires: [
        //'zonblewou.store.mesStore.Profil',

        'zonblewou.store.mesStore.Agence',

        'zonblewou.store.mesStore.Zone',

        'zonblewou.view.mesPages.parametre.agentMarketing.AgMarketingFormController'
    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'agmarketingform',

    defaults: {
        /*
         * Seek out the first enabled, focusable, empty textfield when the form is focused
         */
        //defaultFocus: 'textfield:not([value]):focusable:not([disabled])',

        // defaultButton: 'nextbutton'
    },

    items: [{
            xtype: 'form',
            title: 'ENREGISTRER UN AGENT MARKETING',
            reference: 'agMarketingFormRef',
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
                    emptyText: 'Nom',
                    allowBlank: false,
                    name: 'nomAg',
                    blankText: 'Ce champ est obligatoire',
                    vtype: 'alpha',
                    msgTarget: 'side',
                    //maskRe: /^[a-zA-Z\ ]{0,}$/,

                    listeners: {
                        change: function(field, newValue) {

                            newValue = newValue.toUpperCase();

                            this.setValue(newValue);

                        }
                    }

                },
                {
                    emptyText: 'Prénoms',
                    allowBlank: false,
                    name: 'prenomAg',
                    blankText: 'Ce champ est obligatoire',
                    //vtype: 'alpha',
                    msgTarget: 'side',
                    //maskRe: /^[a-zA-Z\ ]{0,}$/,

                },
                {
                    emptyText: 'Téléphone',
                    allowBlank: false,
                    name: 'telAg',
                    blankText: 'Ce champ est obligatoire',

                    msgTarget: 'side',
                    maskRe: /\d/,

                    regex: /^([0-9]){8}$/,

                    regexText: 'format : 00000000'

                },
                {
                    xtype: 'textareafield',
                    grow: true,
                    name: 'adresseAg',
                    allowBlank: false,
                    emptyText: 'Adresse',
                    blankText: 'Ce champ est obligatoire',
                    //vtype: 'alphanum',
                    msgTarget: 'side'
                },
                /*{
                     xtype: 'combo',
                     emptyText: 'Profil',
                     allowBlank: false,
                     name: 'idProfil',
                     blankText: 'Ce champ est obligatoire',
                     store: {
                         type: 'profil',
                         autoLoad: true
                     },
                     queryMode: 'local',
                     displayField: 'profil',
                     valueField: 'id',
                     editable: false,
                     msgTarget: 'side',

                     listeners: {
                         select: function(combo, records, eOpts) {

                             var profilSelect = records.get('profil');

                             var userComboZone = Ext.ComponentQuery.query("#userComboZoneItemd");

                             if (profilSelect == 'AGENT MARKETING') {

                                 userComboZone[0].setDisabled(false);

                             } else {
                                 userComboZone[0].setDisabled(true);
                             }

                         }
                     }

                 },
                  
                */

                {
                    xtype: 'combo',
                    emptyText: 'Agence',
                    allowBlank: false,
                    name: 'idAgence',
                    blankText: 'Ce champ est obligatoire',
                    store: {
                        type: 'agence',
                        //autoLoad: true
                    },
                    //queryMode: 'local',
                    displayField: 'agence',
                    valueField: 'id',
                    editable: false,
                    msgTarget: 'side',
                    listeners: {
                        //This event will fire when combobox rendered completely
                        afterrender: function() {
                            //So now we are going to set the combobox value here.
                            //I just simply used my default value in the combobox definition but it's possible to query from combobox store also.
                            //For example: store.getAt('0').get('id'); according to Brik's answer.
                            //this.setValue(this.getStore().getAt('0').get(1));

                            this.setValue(zonblewou.vars.AllVars.idAgence);

                            this.getStore().load = true;
                        }
                    }

                },
                {
                    xtype: 'combo',
                    emptyText: 'Zone',
                    itemId: 'userComboZoneItemd',
                    allowBlank: false,
                    name: 'idZone',
                    blankText: 'Ce champ est obligatoire',
                    store: {
                        type: 'zone',
                        autoLoad: true
                    },
                    queryMode: 'local',
                    displayField: 'zone',
                    valueField: 'id',
                    editable: false,
                    msgTarget: 'side',
                    //hidden: true
                    //disabled: true

                },

                {
                    xtype: 'button',
                    //reference: 'btnEnregUserRef',
                    scale: 'small',
                    ui: 'soft-green',
                    iconAlign: 'left',
                    iconCls: 'x-fa fa-save',
                    text: 'Enregistrer',
                    formBind: true,
                    listeners: {
                        click: 'onEnregAgMarketingButtonClick'
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