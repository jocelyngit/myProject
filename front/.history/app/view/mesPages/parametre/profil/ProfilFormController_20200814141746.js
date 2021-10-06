//import store from '../../../../../.sencha/temp/.ide/store.json';
/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.parametre.profil.ProfilFormController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.profilform',


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

    /*
      onProfilBtnAjouter: function() {
        Ext.create('widget.profilform', {
        }).show();
    },
    */


    /*
      METHODE ENREGISTREMENT PROFIL
    */

    onEnregProfilButtonClick: function() {

        //Ext.MessageBox.wait("Enregistrement...", 'Patientez!!');

        /*
            RECUPERATION DES DONNEES DU FORMULAIRE
        */

        var form = this.lookupReference('profilFormRef');

        console.log(form);

        var param = form.getValues();

        /*
            RECUPERATION DU GRID
        */

        var grid = Ext.ComponentQuery.query("profiListe[title='LISTE DES PROFILS']");

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

                } else if (btn === 'no') {
                    this.getView().close();
                }
            }
        });

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

            url: zonblewou.vars.AllVars.url + '/api/profil/store?classe=Profil&format=json',

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

                if (response['original']['error'] == false) {

                    /*
                       AFFICHAGE DU MESSAGE A L4UTILISATEUR
                    */

                    Ext.Msg.show({
                        title: 'CONFIRMATION',
                        msg: response['original']['msg'],
                        width: 300,
                        buttons: Ext.Msg.OK,
                        fn: function(btn) {
                            if (btn == 'ok') {
                                // win.close();
                            }
                        },
                        icon: Ext.MessageBox.INFO
                    });

                    /*
                      CHARGEMENT  GRID
                    */

                    record.load();

                    /*
                      Restauration du formulaire
                       Grisé du bouton
                    */

                    form.reset();


                } else {

                    // Ext.Msg.alert(response['original']['msg'], 'STATUT');
                    Ext.Msg.show({
                        title: 'Erreur',
                        msg: response['original']['msg'],
                        width: 300,
                        buttons: Ext.Msg.OK,
                        fn: function(btn) {
                            if (btn == 'ok') {
                                //store.load();
                                // win.close();
                            }
                        },
                        icon: Ext.MessageBox.ERROR
                    })

                    // console.log(response['success']);
                }

            },

            failure: function() {

                //Ext.Msg.alert('DESOLE', 'Echec de la requête');

                Ext.Msg.show({
                    title: 'ERREUR',
                    msg: 'Echèc de la requête',
                    width: 300,
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

        });

        //var d = me.up('form').getForm().getValues();

        //console.log(donne);

    },

    /*
      Action Modifier
    */

    onProfilEditAction: function(grid, rowIndex, colIndex) {
        //Ext.Msg.alert('reponse du grid', 'STATUT');

        var rec = grid.getStore().getAt(rowIndex);

        console.log(rec.data);

        Ext.create('Ext.window.Window', {

            title: 'MODIFICATION',
            //height: 200,
            width: 300,

            shadow: true,

            controller: 'profilform',
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
                        emptyText: 'Profil',
                        allowBlank: false,
                        name: 'profil',
                        blankText: 'Ce champ est obligatoire',
                        vtype: 'alpha',
                        msgTarget: 'side',

                        value: rec.get('profil')

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

                            console.log(p);

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

                                url: zonblewou.vars.AllVars.url + '/api/profil/update?classe=Profil&format=json',

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
                                            width: 300,
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

                                        /*
                                          Fermeture du window de modification
                                        */
                                        this.up('window').close();

                                    } else {

                                        // Ext.Msg.alert(response['original']['msg'], 'STATUT');
                                        Ext.Msg.show({
                                            title: 'Erreur',
                                            msg: response['original']['msg'],
                                            width: 400,
                                            buttons: Ext.Msg.OK,
                                            fn: function(btn) {
                                                if (btn == 'ok') {
                                                    //store.load();
                                                    // win.close();
                                                }
                                            },
                                            icon: Ext.MessageBox.ERROR
                                        })

                                        // console.log(response['success']);
                                    }

                                },

                                failure: function() {

                                    Ext.Msg.show({
                                        title: 'ERREUR',
                                        msg: 'Echèc de la requête',
                                        width: 400,
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

                        },
                    }
                ]
            }

        }).show();

        // main.floatingItems.show();



    },


    /*
      Action Supprimer
    */

    onProfilDeleteAction: function(grid, rowIndex, colIndex) {

        /*
          RECUPERATION DE LA LIGNE D'ENREGISTREMENT
        */

        var rec = grid.getStore().getAt(rowIndex);

        // console.log(rec.data);

        /*
          RECUPERATION DU STORE
        */

        var store = grid.getStore();

        //console.log(store);

        //store.remove(rec);

        //store.sync();

        // message de confirmation


        /*
           Ext.Ajax.request({

            url: 'https://localhost:8000/api/profil/destroy?classe=Profil&format=json',

            method: 'DELETE',

            //cors: true,

            //useDefaultXhrHeader: false,

            params: rec.data,

            success: function() {
                alert('success');
            },
            failure: function() {
                alert('failure');
            }
        });
        */


        Ext.MessageBox.show({

            title: 'SUPPRESSION',

            msg: 'Voulez-vous supprimer cet enregistrement ?',

            buttons: Ext.MessageBox.YESNO,

            fn: function(button) {

                if ('yes' == button) {

                    Ext.data.JsonP.request({

                        url: zonblewou.vars.AllVars.url + '/api/profil/destroy',

                        params: {
                            'id': rec.get('id'),
                            //rec.data,
                            'classe': 'Profil'
                        },

                        /*
                          writer: {
                            type: 'json'
                        },
                        */


                        reader: {
                            type: 'json'
                        },

                        timeout: 30000,

                        callbackKey: 'callback',

                        disableCaching: false,

                        success: function() {

                            store.sync();
                        },

                        /*
                          failure: function() {
                            //Ext.Msg.alert('DESOLE', 'Echec de la requête');

                            Ext.Msg.show({
                                title: 'ERREUR',
                                msg: 'Echèc de la requête',
                                width: 300,
                                buttons: Ext.Msg.OK,
                                fn: function(btn) {
                                    if (btn == 'ok') {
                                        //store.load();
                                        // win.close();
                                    }
                                },
                                icon: Ext.MessageBox.ERROR
                            })

                        },
                        */

                        scope: this,

                    });

                    store.remove(rec);

                    store.load();
                }
            },
            icon: Ext.MessageBox.QUESTION
        })

    }

});