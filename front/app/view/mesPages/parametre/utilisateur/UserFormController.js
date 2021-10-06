//import store from '../../../../../.sencha/temp/.ide/store.json';
/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.parametre.utilisateur.UserFormController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.userform',


    /*
    init: function(view) {
        var form = this.lookupReference('formMembreRef');
        //btn = form.items.items;

        console.log(form);

        
        buttons = tb.items.items,
            ui = view.colorScheme;

        //Apply styling buttons
        if (ui) {
            buttons[1].setUI(ui);
            buttons[2].setUI(ui);
        }
        
    },
    */

    /*
    onNextClick: function(button) {
        //This is where you can handle any logic prior to moving to the next card
        var panel = button.up('panel');

        panel.getViewModel().set('atBeginning', false);

        this.navigate(button, panel, 'next');
    },

    onPreviousClick: function(button) {
        var panel = button.up('panel');

        panel.getViewModel().set('atEnd', false);

        this.navigate(button, panel, 'prev');
    },

    navigate: function(button, panel, direction) {
        var layout = panel.getLayout(),
            progress = this.lookupReference('progress'),
            model = panel.getViewModel(),
            progressItems = progress.items.items,
            item, i, activeItem, activeIndex;

        layout[direction]();

        activeItem = layout.getActiveItem();
        activeIndex = panel.items.indexOf(activeItem);

        for (i = 0; i < progressItems.length; i++) {
            item = progressItems[i];

            if (activeIndex === item.step) {
                item.setPressed(true);
            } else {
                item.setPressed(false);
            }

            // IE8 has an odd bug with handling font icons in pseudo elements;
            // it will render the icon once and not update it when something
            // like text color is changed via style addition or removal.
            // We have to force icon repaint by adding a style with forced empty
            // pseudo element content, (x-sync-repaint) and removing it back to work
            // around this issue.
            // See this: https://github.com/FortAwesome/Font-Awesome/issues/954
            // and this: https://github.com/twbs/bootstrap/issues/13863
            if (Ext.isIE8) {
                item.btnIconEl.syncRepaint();
            }
        }

        activeItem.focus();

        // beginning disables previous
        if (activeIndex === 0) {
            model.set('atBeginning', true);
        }

        // wizard is 4 steps. Disable next at end.
        if (activeIndex === 3) {
            model.set('atEnd', true);
        }
    },
    */


    // click sur le boutton enregister
    // Membre formulaire
    onEnregUserButtonClick: function() {

        //Ext.MessageBox.wait("Enregistrement...", 'Patientez!!');

        /*
            RECUPERATION DES DONNEES DU FORMULAIRE
        */

        var form = this.lookupReference('userFormRef');

        var param = form.getValues();

        console.log(param);

        /*
            RECUPERATION DU GRID
        */

        var grid = Ext.ComponentQuery.query("userListe[title='LISTE DES UTILISATEURS']");

        console.log(grid);

        var record = grid[0]['store'];

        console.log(record);

        /*
            MESSAGE
        */

        Ext.Msg.show({
            title: 'ENREGISTREMENT',
            message: 'Continuez avec l\'enregistrement?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {

                    Ext.MessageBox.show({
                        msg: 'Enregistrement, patientez...',
                        progressText: 'Saving...',
                        width: 300,
                        wait: true,
                        waitConfig: { interval: 300 },
                        animateTarget: 'waitButton'
                    });
                    setTimeout(function() {
                        Ext.MessageBox.hide();
                        //Ext.example.msg('Done', 'data saved!');
                    }, 10000);

                    /*
                        Ext.data.JsonP.request
                    */

                    Ext.data.JsonP.request({

                        url: zonblewou.vars.AllVars.url + '/api/Authentification/auth/register?classe=User&format=json',

                        params: param,

                        writer: {
                            type: 'json'
                        },

                        reader: {
                            type: 'json'
                        },

                        callbackKey: 'callback',

                        disableCaching: false,

                        scope: this,

                        success: function(response) {

                            if (response['success']['error'] == false) {

                                Ext.Msg.show({
                                    title: 'CONFIRMATION',
                                    msg: response['success']['info'],
                                    width: 250,
                                    buttons: Ext.Msg.OK,
                                    fn: function(btn) {
                                        if (btn == 'ok') {
                                            record.load();
                                            // win.close();
                                        }
                                    },
                                    icon: Ext.MessageBox.INFO
                                });

                                record.load();

                            } else if (response['success']['error'] == true) {

                                Ext.Msg.show({
                                    title: 'ERREUR',
                                    msg: response['success']['msg'],
                                    width: 250,
                                    buttons: Ext.Msg.OK,
                                    fn: function(btn) {
                                        if (btn == 'ok') {
                                            record.load();
                                            // win.close();
                                        }
                                    },
                                    icon: Ext.MessageBox.ERROR
                                });
                            }

                        },

                        failure: function() {

                            //Ext.Msg.alert('DESOLE', 'Echec de la requête');

                            Ext.Msg.show({
                                title: 'ERREUR',
                                msg: 'Echèc de l\'enregistrement',
                                width: 250,
                                buttons: Ext.Msg.OK,
                                fn: function(btn) {
                                    if (btn == 'ok') {
                                        //store.load();
                                        // win.close();
                                    }
                                },
                                icon: Ext.MessageBox.ERROR
                            })

                        }

                    })
                } else if (btn === 'no') {}
            }
        })

    },

    /*
      MODIFICATION D'UTILISATEUR
    */

    onUserEditAction: function(grid, rowIndex, colIndex) {
        //Ext.Msg.alert('reponse du grid', 'STATUT');

        var rec = grid.getStore().getAt(rowIndex);

        console.log(rec.data);

        Ext.create('Ext.window.Window', {

            title: 'MODIFICATION',
            //height: 200,
            width: 300,

            shadow: true,

            controller: 'userform',
            //maximizable: true,
            layout: 'fit',

            floating: true,

            closable: true,

            //closeAction: 'hide',

            modal: true,

            /*
              Formulaire de modification
            */
            items: { // Let's put an empty grid in just to illustrate fit layout
                xtype: 'form',

                defaults: {
                    labelWidth: 90,
                    labelAlign: 'top',
                    labelSeparator: '',
                    submitEmptyText: false,
                    width: '100%'
                },
                margin: 15,
                //bodypadding: 10,
                defaultType: 'textfield',
                anchor: '100%',
                border: false,

                items: [{
                        xtype: 'hiddenfield',
                        name: 'id',
                        value: rec.get('id')
                    },
                    {
                        emptyText: 'Nom',
                        allowBlank: false,
                        name: 'nomUser',
                        blankText: 'Ce champ est obligatoire',
                        vtype: 'alpha',
                        msgTarget: 'side',
                        //maskRe: /^[a-zA-Z\ ]{0,}$/,

                        listeners: {
                            change: function(field, newValue) {

                                newValue = newValue.toUpperCase();

                                this.setValue(newValue);

                            }
                        },
                        value: rec.get('nomUser')

                    },
                    {
                        emptyText: 'Prénoms',
                        allowBlank: false,
                        name: 'prenomUser',
                        blankText: 'Ce champ est obligatoire',
                        //vtype: 'alpha',
                        msgTarget: 'side',
                        //maskRe: /^[a-zA-Z\ ]{0,}$/,
                        value: rec.get('prenomUser')

                    }, {
                        emptyText: 'Nom d\'utilisateur',
                        allowBlank: false,
                        name: 'login',
                        blankText: 'Ce champ est obligatoire',
                        vtype: 'alphanum',
                        msgTarget: 'side',
                        value: rec.get('login')

                    }, {
                        emptyText: 'Téléphone',
                        allowBlank: false,
                        name: 'telUser',
                        blankText: 'Ce champ est obligatoire',

                        msgTarget: 'side',
                        maskRe: /\d/,

                        regex: /^([0-9]){8}$/,

                        regexText: 'format : 00000000',
                        value: rec.get('telUser')

                    }, {
                        emptyText: 'Mot de passe',
                        inputType: 'password',
                        allowBlank: false,
                        name: 'password',
                        blankText: 'Ce champ est obligatoire',
                        //vtype: 'alpha',
                        msgTarget: 'side',
                        value: rec.get('password')
                    },

                    {
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

                                /*
                                  RECUpERATION DU PROFIL SELECTIONNE
                                */

                                var profilSelect = records.get('profil');

                                /*
                                  RECHERCHE DE LA COMBO PAR ITEMID
                                */

                                var userComboZone = Ext.ComponentQuery.query("#userUpdateComboZoneItemd");

                                if (profilSelect == 'AGENT MARKETING') {

                                    userComboZone[0].setDisabled(false);

                                } else {
                                    userComboZone[0].setDisabled(true);
                                }

                            }
                        },

                    },
                    {
                        xtype: 'combo',
                        emptyText: 'Agence',
                        allowBlank: false,
                        name: 'idAgence',
                        blankText: 'Ce champ est obligatoire',
                        store: {
                            type: 'agence',
                            autoLoad: true
                        },
                        queryMode: 'local',
                        displayField: 'agence',
                        valueField: 'id',
                        editable: false,
                        msgTarget: 'side'

                    },
                    {
                        xtype: 'combo',
                        emptyText: 'Zone',
                        itemId: 'userUpdateComboZoneItemd',
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
                        disabled: true

                    },
                    {
                        xtype: 'button',
                        reference: 'btnModifProfilRef',
                        scale: 'small',
                        ui: 'soft-green',
                        iconAlign: 'left',
                        iconCls: 'x-fa fa-edit',
                        text: 'Modifier',
                        formBind: true,
                        handler: function() {

                            var p = this.up('form').getForm().getValues();

                            var fen = this.up('window');

                            Ext.Msg.show({
                                title: 'MODIFICATION',
                                message: 'Continuez avec la modification?',
                                buttons: Ext.Msg.YESNO,
                                icon: Ext.Msg.QUESTION,
                                fn: function(btn) {
                                    if (btn === 'yes') {

                                        fen.close();

                                        Ext.MessageBox.show({
                                            msg: 'Modification, patientez...',
                                            progressText: 'Saving...',
                                            width: 300,
                                            wait: true,
                                            waitConfig: { interval: 300 },
                                            animateTarget: 'waitButton'
                                        });
                                        setTimeout(function() {
                                            Ext.MessageBox.hide();
                                            //Ext.example.msg('Done', 'data saved!');
                                        }, 10000);

                                        /*
                                          REQUETE JSONP UPDATE PROFIL
                                        */

                                        Ext.data.JsonP.request({

                                            url: zonblewou.vars.AllVars.url + '/api/Authentification/auth/update?classe=User&format=json',

                                            params: p,

                                            writer: {
                                                type: 'json'
                                            },

                                            reader: {
                                                type: 'json'
                                            },

                                            callbackKey: 'callback',

                                            disableCaching: false,

                                            scope: this,

                                            success: function(response) {

                                                console.log(response);

                                                if (response['original']['error'] == false) {

                                                    Ext.Msg.show({
                                                        title: 'CONFIRMATION',
                                                        msg: response['original']['msg'],
                                                        width: 250,
                                                        buttons: Ext.Msg.OK,
                                                        fn: function(btn) {
                                                            if (btn == 'ok') {

                                                                //console.log(win)

                                                            }
                                                        },
                                                        icon: Ext.MessageBox.INFO
                                                    });

                                                    /*
                                                      CHARGEMENT DU STORE
                                                    */

                                                    grid.getStore().load();

                                                } else {

                                                    // Ext.Msg.alert(response['original']['msg'], 'STATUT');
                                                    Ext.Msg.show({
                                                        title: 'Erreur',
                                                        msg: response['original']['msg'],
                                                        width: 250,
                                                        buttons: Ext.Msg.OK,
                                                        fn: function(btn) {
                                                            if (btn == 'ok') {
                                                                //store.load();
                                                                // win.close();
                                                            }
                                                        },
                                                        icon: Ext.MessageBox.ERROR
                                                    })

                                                }

                                            },

                                            failure: function() {

                                                Ext.Msg.show({
                                                    title: 'ERREUR',
                                                    msg: 'Echèc de la requête',
                                                    width: 250,
                                                    buttons: Ext.Msg.OK,
                                                    fn: function(btn) {
                                                        if (btn == 'ok') {
                                                            //store.load();
                                                            // win.close();
                                                        }
                                                    },
                                                    icon: Ext.MessageBox.ERROR
                                                });

                                            }

                                        })
                                    } else if (btn === 'no') {}
                                }
                            });



                        },
                    }
                ]
            }

        }).show();


    },


});