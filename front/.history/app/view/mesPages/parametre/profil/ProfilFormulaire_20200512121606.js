/*
  import window from '../../../../../ext/modern/theme-neptune/resources/images/pictos/window.png';

*/
Ext.define('zonblewou.view.mesPages.parametre.profil.ProfilFormulaire', {

    extend: 'Ext.form.Panel',

    //extend: 'Ext.window.Window',

    xtype: 'profilFormulaire',

    //alias: 'widget.profilform',

    /*
      
    modal: true,
    width: 400,
    shadow: true,
    layout: 'fit',
    floating: true,
    closable: true,
    closeAction: 'close',
    border: false,
    plain: true,
    */

    //bodyPadding: 15,

    // requiered class
    requires: [

        'zonblewou.view.mesPages.parametre.profil.ProfilFormController',
    ],

    //viewModel: {
    //   type: 'wizardform'
    //},

    controller: 'profilform',

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
            title: 'ENREGISTRER UN POFIL UTILISATEUR',
            reference: 'profilFormRef',
            defaultType: 'textfield',
            //margin: 15,

            defaults: {
                labelWidth: 90,
                labelAlign: 'top',
                labelSeparator: '',
                submitEmptyText: false,
                width: '100%'
            },
            items: [{
                    emptyText: 'Profil',
                    allowBlank: false,
                    name: 'profil',
                    blankText: 'Ce champ est obligatoire',
                    //vtype: 'alpha',

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
                    xtype: 'button',
                    reference: 'btnEnregProfilRef',
                    scale: 'small',
                    ui: 'soft-green',
                    iconAlign: 'left',
                    iconCls: 'x-fa fa-save',
                    text: 'Enregistrer',
                    formBind: true,
                    listeners: {
                        click: 'onEnregProfilButtonClick'
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