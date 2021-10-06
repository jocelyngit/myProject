Ext.define('zonblewou.view.mesPages.parametre.typeOpportunie.TypeOppFormulaire', {

    extend: 'Ext.form.Panel',

    xtype: 'tOppFormulaire',

    method: 'POST',

    //bodyPadding: 15,

    // requiered class
    requires: [
        //'zonblewou.store.mesStore.Sexe',
        'zonblewou.view.mesPages.parametre.typeOpportunite.TypeOppFormController'
    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'typeoppform',

    defaults: {
        /*
         * Seek out the first enabled, focusable, empty textfield when the form is focused
         */
        //defaultFocus: 'textfield:not([value]):focusable:not([disabled])',

        // defaultButton: 'nextbutton'
    },

    cls: 'user-form',

    items: [{
            xtype: 'form',
            title: 'ENREGISTRER UN TYPE D\'OPPORTUNITE',
            reference: 'typeOppFormRef',
            defaultType: 'textfield',
            method: 'POST',

            // ToolBars
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                //ui: 'footer',
                //defaults: { cls: 'btn-orange' },
                items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-plus',
                    //text: '<b>Ajouter</b>'

                    // HANDELER
                    handler: function() {

                        var form = this.up('form').getForm();

                        form.reset();

                    }
                }],

            }],

            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                width: '100%'
            },
            items: [{
                    emptyText: 'Type d\'opportunité',
                    allowBlank: false,
                    name: 'typeOpportunite',
                    blankText: 'Ce champ est obligatoire',

                    msgTarget: 'side',
                    maskRe: /^[a-zA-Z\ ]{0,}$/,

                    listeners: {
                        change: function(field, newValue) {

                            newValue = newValue.toUpperCase();

                            this.setValue(newValue);

                        }
                    }

                },
                {
                    xtype: 'numberfield',
                    emptyText: 'Pourcentage',
                    allowBlank: false,
                    name: 'pourcentage',
                    blankText: 'Ce champ est obligatoire',

                    msgTarget: 'side',
                    minValue: 0,
                    allowDecimals: true,
                    decimalPrecision: 2,
                    decimalSeparator: '.'

                },
                {
                    xtype: 'button',
                    //reference: 'btnEnregProfilRef',
                    scale: 'small',
                    ui: 'soft-green',
                    iconAlign: 'left',
                    iconCls: 'x-fa fa-save',
                    text: 'Enregistrer',
                    formBind: true,
                    listeners: {
                        click: 'onEnregTypeOppButtonClick'
                    }

                }

            ],

        },


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