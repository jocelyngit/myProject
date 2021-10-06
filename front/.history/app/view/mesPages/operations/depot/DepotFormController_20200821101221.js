//import store from '../../../../../.sencha/temp/.ide/store.json';
/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.operations.depot.DepotFormController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.depotform',


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

    onAgentComboDepotMarketeurSelect: function(combo, records, eOpts) {

        var d = records.getData();

        //console.log(d);

        var id = d['id'];

        console.log(id);

        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/depotMarketeur/infoCompteDep?classe=DepotMarketeur&format=json',

            params: { 'id': id },

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

                /*
                  var montantVerseField = this.lookupReference('montantVerseRegRef');

                 var reste = this.lookupReference('resteRegRef');

                 var idCompteDepField = this.lookupReference('idCompteDepHiddenField');

                 montantVerseField.setValue(infoAgent[0]['soldeDep']);

                 reste.setValue(infoAgent[0]['soldeDep']);

                 idCompteDepField.setValue(infoAgent[0]['id']);
                */


            },

            failure: function() {

                //Ext.Msg.alert('DESOLE', 'Echec de la requête');

                Ext.Msg.show({
                    title: 'ERREUR',
                    msg: 'Echèc de la requete',
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

    },


    // click sur le boutton enregister
    // Membre formulaire
    onEnregDepotButtonClick: function() {

        /*
            RECUPERATION DES DONNEES DU FORMULAIRE
        */

        var form = this.lookupReference('depotFormRef');

        var p = form.getValues();

        console.log(p);

        p['idUser'] = zonblewou.vars.AllVars.idUser;

        /*
            RECUPERATION DE la Grid
        */

        //gride du membre
        var grid = Ext.ComponentQuery.query("depotListe[title='INFORMATION']");

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

                        url: zonblewou.vars.AllVars.url + '/api/compteDeDepot/depot?classe=CompteDeDepot&format=json',

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

                            if (response['original']['error'] == false) {
                                Ext.Msg.show({
                                    title: 'CONFIRMATION',
                                    msg: response['original']['msg'],
                                    width: 250,
                                    buttons: Ext.Msg.OK,
                                    fn: function(btn) {
                                        if (btn == 'ok') {
                                            // win.close();
                                        }
                                    },
                                    icon: Ext.MessageBox.INFO
                                });

                                // Affichage dans les formulaire
                                record.load();

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

    }

});