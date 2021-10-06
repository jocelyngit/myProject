/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.operations.regularisation.CotisationFormController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.cotisationform',


    requires: [
        'zonblewou.store.mesStore.CompteDeDepot'
    ],
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

    onAgentComboRegularisationSelect: function(combo, records, eOpts) {

        var d = records.getData();

        //console.log(donne);

        var id = d['id'];

        console.log(id);

        var montantVerseField = this.lookupReference('montantVerseRegRef');

        var resteField = this.lookupReference('resteRegRef');

        var idCompteDepField = this.lookupReference('idCompteDepHiddenField');

        // recuperation du store de compte de dépot
        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/depotMarketeur/getDepotDuJour?classe=DepotMarketeur&format=json',

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


                if (response['error'] == true) {


                    Ext.Msg.show({
                        title: 'ERREUR',
                        msg: response['msg'],
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

                } else if (response['error'] == false) {

                    Ext.toast({
                        html: response['msg'],
                        title: 'SUCCES',
                        width: 200,
                        align: 't'
                    });

                    console.log(response['donnee']);

                    montantVerseField.setValue(response['donnee']['montantDepot']);

                    resteField.setValue(response['donnee']['montantDepot']);

                    idCompteDepField.setValue(response['donnee']['idCptDepot']);

                }

            },

            failure: function() {

                //Ext.Msg.alert('DESOLE', 'Echec de la requête');

                Ext.Msg.show({
                    title: 'ERREUR',
                    msg: 'Echèc de la requete',
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

        });

    },



    onSearchRegButtonClick: function() {

        var numcompteRegField = this.lookupReference('numCompteRegRef');

        var numcompteRegFieldVal = numcompteRegField.getValue();

        console.log(numcompteRegFieldVal);


        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/compte/infoCompte?classe=Compte&format=json',

            params: { 'numCompte': numcompteRegFieldVal },

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

                if (response['original']['error'] == true) {
                    Ext.Msg.alert('Erreur', response['original']['msg']); // Toast will close in 2000 milliseconds
                } else if (response['original']['error'] == false) {
                    console.log(response['original']['msg'][0]);

                    var infoMembre = response['original']['msg'][0];

                    var nomField = this.lookupReference('nomMembreRegRef');

                    var prenomField = this.lookupReference('prenomMembreRegRef');

                    var mmiseField = this.lookupReference('miseRegRef');

                    var soldeField = this.lookupReference('soldeRegRef');

                    var idMembreField = this.lookupReference('idMembreHiddenField');

                    var idCompteField = this.lookupReference('idCompteHiddenField');

                    nomField.setValue(infoMembre['nomMembre']);

                    prenomField.setValue(infoMembre['prenomMembre']);

                    mmiseField.setValue(infoMembre['mise']);

                    soldeField.setValue(infoMembre['solde']);

                    idCompteField.setValue(infoMembre['id']);

                    idMembreField.setValue(infoMembre['idMembre']);

                }

                //var montantVerseField = this.lookupReference('montantVerseRegRef');

                // montantVerseField.setValue(infoAgent[0]['soldeDep']);
                //= infoAgent[0]['soldeDep'];

                //console.log(montantVerseField);

                //console.log(infoAgent[0]['soldeDep']);

            },

            failure: function() {

                //Ext.Msg.alert('DESOLE', 'Echec de la requête');

                Ext.Msg.show({
                    title: 'ERREUR',
                    msg: 'Echèc de la requete',
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

        });

    },
    // click sur le boutton enregister
    // Membre formulaire
    onEnregRegButtonClick: function() {

        /*
            RECUPERATION DES DONNEES DU FORMULAIRE
        */

        var form = this.lookupReference('cotisationFormRef');

        //console.log(form.getForm().getFields().items[2]);

        var p = form.getValues();

        //console.log(p);

        /*
            RECUPERATION DU GRID
        */

        var grid = Ext.ComponentQuery.query("cotisationListe[title='REGULARISATIONS']");

        var resteAregler = Ext.getCmp('resteAreglerItemId');

        // console.log(resteAregler);

        var myStore = grid[0].getStore();

        //console.log(myStore);

        var data = [{
            dateCotisation: p['dateCotisation'],

            montantCotisation: p['montantCotisation'],

            idMembre: p['idMembre'],

            idCompte: p['idCompte'],

            numCompte: p['numCompte'],

            idCompteDep: p['idCompteDep'],

            nomMembre: p['nomMembre'],

            prenomMembre: p['prenomMembre'],

            mise: p['mise'],

            idUser: zonblewou.vars.AllVars.idUser

        }];

        myStore.add(data);

        myStore.load

        var resteField = this.lookupReference('resteRegRef');

        resteField.setValue(resteField.getValue() - p['montantCotisation']);

        resteAregler.setValue(resteField.getValue());

        //form.getForm().getFields().items[3].setValue('');

        form.getForm().getFields().items[4].setValue('');

        form.getForm().getFields().items[5].setValue('');


    },


    // methode de régularisation des comptes
    onRegularisationBtnClick: function(btn) {

        var regGrid = Ext.ComponentQuery.query("cotisationListe[title='REGULARISATIONS']");

        //console.log(regGrid);

        var regStore = regGrid[0].getStore();

        var regData = regStore.getData().items;

        //console.log(regData);

        //var long = regData['length'];

        var myStore = Ext.getStore('cotisationStoreId').getData();

        var longueurStore = myStore['length'];

        for (let i = 0; i < longueurStore; i++) {

            if (i == 0) {
                var p0 = myStore.items[i].getData();
            } else {

                var p = myStore.items[i].getData();

                p0 = JSON.stringify({ p0, p });

                console.log(p0);

            }

        };

        Ext.Msg.show({
            title: 'ENREGISTREMENT',
            message: 'Continuez avec la régularisation? Vous ne pouvez plus revenir en arrière.',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {

                    Ext.MessageBox.show({
                        msg: 'Régularisation en cours...',
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




                    // var p0 = p;

                    // var PConcat = p.concat(p);

                    //console.log(p);

                    //var donneStringify = JSON.stringify(p);

                    // console.log(donneStringify);

                    // construction de l'objet Json strigify

                    /**
                     * 
                     * Ext.data.JsonP.request({

                        url: zonblewou.vars.AllVars.url + '/api/cotisation/store?classe=Cotisation&format=json',

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

                                Ext.toast({
                                    html: response['original']['msg'],
                                    title: 'SUCCES',
                                    width: 200,
                                    align: 't'
                                });


                            } else if (response['original']['error'] == true) {

                                Ext.toast({
                                    html: response['original']['msg'],
                                    title: 'Erreur',
                                    width: 200,
                                    align: 't'
                                });
                                /*
                               Ext.Msg.show({
                                title: 'CONFIRMATION',
                                msg: response['original']['msg'],
                                width: 300,
                                buttons: Ext.Msg.OK,
                                fn: function(btn) {
                                    if (btn == 'ok') {
                                        record.load();
                                        // win.close();
                                    }
                                },
                                icon: Ext.MessageBox.INFO
                            });
                           
                            }

                        },

                        failure: function() {

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

                    });

                    */


                    // }

                } else if (btn === 'no') {}
            }
        })

    }


});