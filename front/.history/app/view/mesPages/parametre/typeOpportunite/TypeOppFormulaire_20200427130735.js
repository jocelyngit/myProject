Ext.define('zonblewou.view.mesPages.parametre.typeOperation.TypeOperationFormulaire', {

    extend: 'Ext.form.Panel',

    xtype: 'tOperationFormulaire',

    method: 'POST',

    //bodyPadding: 15,

    // requiered class
    requires: [
        //'zonblewou.store.mesStore.Sexe',
        'zonblewou.view.mesPages.parametre.typeOperation.TypeOperationFormController',
        'zonblewou.CustomVTypes',
    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'typeoperationform',

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
            title: 'ENREGISTRER UN TYPE D"OPERAtion',
            reference: 'typeOperationFormRef',
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
                    emptyText: 'Type d"opération',
                    allowBlank: false,
                    name: 'typeOperation',
                    blankText: 'Ce champ est obligatoire',
                    vtype: 'alpha',
                    msgTarget: 'side'

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
                        click: 'onEnregTypeOperationButtonClick'
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