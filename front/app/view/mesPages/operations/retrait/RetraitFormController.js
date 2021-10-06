/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.operations.retrait.RetraitFormController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.retraitform',



    requires: [
        'Ext.window.Toast',
        'Ext.ux.grid.Printer'
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

    onSearchNumcompteRetButtonClick: function() {

        var numcompteRetField = this.lookupReference('numCompteRetRef');

        var numcompteRetFieldVal = numcompteRetField.getValue();

        console.log(numcompteRetFieldVal);

        var nomField = this.lookupReference('nomMembreRetRef');

        //var prenomField = this.lookupReference('prenomMembreRetRef');

        var miseField = this.lookupReference('miseRetRef');

        var soldeField = this.lookupReference('soldeRetRef');

        var idMembreField = this.lookupReference('idMembreRetHiddenField');

        var idCompteField = this.lookupReference('idCompteRetHiddenField');

        var octField = this.lookupReference('octRetRef');

        var omtField = this.lookupReference('omtRetRef');

        var oltField = this.lookupReference('oltRetRef');

        var mtRecField = this.lookupReference('mtRecupRetRef');

        var marketeurField = this.lookupReference('marketeurRetRef');


        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/operation/infoComptePourRetrait?classe=Operation&format=json',

            params: { 'numCompte': numcompteRetFieldVal },

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

                    Ext.Msg.alert('Erreur', response['msg']);
                    // Toast will close in 2000 milliseconds
                } else if (response['error'] == false) {

                    console.log(response['msg'][0]);

                    var infoRetrait = response['msg'][0];

                    nomField.setValue((infoRetrait['nomMembre'] + " " + infoRetrait['prenomMembre']));

                    //prenomField.setValue(infoRetrait['prenomMembre']);

                    miseField.setValue(infoRetrait['mise']);

                    soldeField.setValue(infoRetrait['solde']);

                    idCompteField.setValue(infoRetrait['id']);

                    idMembreField.setValue(infoRetrait['idMembre']);

                    octField.setValue(infoRetrait['oct']);

                    omtField.setValue(infoRetrait['omt']);

                    oltField.setValue(infoRetrait['olt']);

                    mtRecField.setValue((infoRetrait['oct'] + infoRetrait['omt']));

                    marketeurField.setValue(infoRetrait['nomAg'] + " " + infoRetrait['prenomAg']);

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

    //sélection de la personne agissant

    onPagissantComboSelect : function(combo, record)
    {
        console.log(record);
        console.log(record.get('code'));

        var me = this,
            tfnom = me.lookupReference('nomPagissantRef'),
            tfprenom = me.lookupReference('prenomPagissantRef'),
            tftel = me.lookupReference('telPagissantRef'),
            btnEnregRet = me.lookupReference('btnEnregRetraitRef');

        console.log('btn');
        console.log(btnEnregRet);


        //console.log(me);

        if (record.get('code') === "LUI-MÊME")
        {
            tfnom.allowBlank = true;
            tfnom.setHidden(true);
            tfnom.setValue(null);
            tfprenom.allowBlank = true;
            tfprenom.setHidden(true);
            tfprenom.setValue(null);
            tftel.allowBlank = true;
            tftel.setHidden(true);
            tftel.setValue(null);

            //btnEnregRet.setDisabled(false);
        }
        else if (record.get('code') === "AUTRES PERSONNES")
        {
            tfnom.allowBlank = false;
            tfnom.setHidden(false);
            tfprenom.allowBlank = false;
            tfprenom.setHidden(false);
            tftel.allowBlank = false;
            tftel.setHidden(false);

            btnEnregRet.setDisabled(true);
            //btnEnregRet.formBind = true;
        }


    },


    // click sur le boutton enregister
    // Membre formulaire
    onValiderRetButtonClick: function() {

        /*
            RECUPERATION DES DONNEES DU FORMULAIRE
        */

        var form = this.lookupReference('retraitFormRef');

        var p = form.getValues();

        console.log(p);

        /**
         * 
         * RECUPERATION DU GRID
         */
        var grid = Ext.ComponentQuery.query("retraitListe[title='RETRAIT']");

        var myStore = grid[0].getStore();

        var data;


        //console.log(p);

        /**
         * Verification des montants
         */

        var valeurDeTest = null;

        if (p['typeOpp'] === "oct") {

            if (parseInt(p['montantOperation']) > parseInt(p['oct'])) {

                Ext.Msg.show({
                    title: 'ERREUR',
                    msg: 'Montant du retrait ne doit pas être supérieur au solde O.C.T..',
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

            } else {
                valeurDeTest = 1;
            }

        } else if (p['typeOpp'] === "omt") {

            if (parseInt(p['montantOperation']) > parseInt(p['omt'])) {

                Ext.Msg.show({
                    title: 'ERREUR',
                    msg: 'Montant du retrait ne doit pas être supérieur au solde O.M.T..',
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

            } else {
                valeurDeTest = 1;
            }

        } else if (p['typeOpp'] === "olt") {

            if (parseInt(p['montantOperation']) > parseInt(p['olt'])) {

                Ext.Msg.show({
                    title: 'ERREUR',
                    msg: 'Montant du retrait ne doit pas être supérieur au solde O.L.T..',
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

            } else {
                valeurDeTest = 1;
            }

        }

        if (valeurDeTest == 1) {

            console.log('donneé prête à envoyer au serveur');
            console.log(p);
            p['idUser'] = zonblewou.vars.AllVars.idUser;
            p['montantOperation'] = parseInt(p['montantOperation']);
            p['oct'] = parseInt(p['oct']);
            p['omt'] = parseInt(p['omt']);
            p['olt'] = parseInt(p['olt']);
            p['solde'] = parseInt(p['solde']);
            p['idCompte'] = parseInt(p['idCompte']);
            p['idMembre'] = parseInt(p['idMembre']);

            Ext.Msg.show({
                title: 'ENREGISTREMENT',
                message: 'Continuez avec le retrait? Vous ne pouvez plus revenir en arrière.',
                buttons: Ext.Msg.YESNO,
                width: 300,
                icon: Ext.Msg.QUESTION,
                fn: function(btn) {
                    if (btn === 'yes') {

                        Ext.MessageBox.show({
                            msg: 'Enregistrement, patientez...',
                            progressText: 'Saving...',
                            width: 250,
                            wait: true,
                            waitConfig: { interval: 250 },
                            animateTarget: 'waitButton'
                        });
                        setTimeout(function() {
                            Ext.MessageBox.hide();
                            //Ext.example.msg('Done', 'data saved!');
                        }, 10000);


                        Ext.data.JsonP.request({

                            url: zonblewou.vars.AllVars.url + '/api/operation/store?classe=Operation&format=json',

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

                                console.log(response)

                                if (response['error'] == false) {
                                    Ext.Msg.show({
                                        title: 'CONFIRMATION',
                                        msg: response['msg'],
                                        width: 250,
                                        buttons: Ext.Msg.OK,
                                        fn: function(btn) {
                                            if (btn == 'ok') {

                                                data = [{
                                                    numCompte: p['numCompte'],
                                                    dateOperation: p['dateOperation'],
                                                    montantOperation: p['montantOperation'],
                                                    idMembre: p['idMembre'],
                                                    idCompte: p['idCompte'],
                                                    titulaire: p['titulaireCompte'],
                                                    typeOperation: p['typeOperation'],
                                                    typeOpp: p['typeOpp'],
                                                    personneAgissant : p['personneAgissant'],
                                                    nomPagissant : p['nomPagissant'],
                                                    prenomPagissant : p['prenomPagissant'],
                                                    telPagissant : p['telPagissant']
                                                }];

                                                myStore.add(data);

                                                myStore.load

                                            }
                                        },
                                        icon: Ext.MessageBox.INFO
                                    });

                                } else if (response['error'] == true) {
                                    // Ext.Msg.alert(response['original']['msg'], 'STATUT');
                                    Ext.Msg.show({
                                        title: 'Erreur',
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


        /*
            RECUPERATION DE la Grid

            //gride du membre
        var grid = Ext.ComponentQuery.query("oppListe[title='INFORMATION DES OPPORTUINITES']");

        console.log(grid);

        var record = grid[0]['store'];

        console.log(record);
        */


    },

    onAnnulerRetButtonClick: function() {


        var me = this,
            form = me.lookupReference('retraitFormRef'),
            tfnom = me.lookupReference('nomPagissantRef'),
            tfprenom = me.lookupReference('prenomPagissantRef'),
            tftel = me.lookupReference('telPagissantRef');

        //console.log(tfnom);

        form.reset();

        //tfnom.allowBlank = true;
        tfnom.setHidden(true);
        //tfnom.setValue(null);
        //tfprenom.allowBlank = true;
        tfprenom.setHidden(true);
        //tfprenom.setValue(null);
        //tftel.allowBlank = true;
        tftel.setHidden(true);
        //tftel.setValue(null);


       /* var comboTypeOperation = form.items.items[1].items.items[4];

        console.log(comboTypeOperation);

        comboTypeOperation.getStore().each(function(record) {

            //console.log(record.get('id'));

            if (record.get('typeOperation') === "RETRAIT") {

                id = record.get('id')

            }

        });

        comboTypeOperation.setValue(id);

        */

        //comboAgence.setValue(zonblewou.vars.AllVars.idAgence);

        var myStore = Ext.getStore('retraitStoreId');

        myStore.removeAll();

    },

    // Imprimer un reçu
    /*onPrint: function(button, e, options) {

        Ext.create('Ext.window.Window', {

            //title: 'MODIFICATION',
            //height: 200,
            width: '80%',

            shadow: true,

            controller: 'profilform',
            //maximizable: true,
            layout: 'fit',

            floating: true,

            closable: true,

            //closeAction: 'hide',

            modal: true,

            items : [{
                xtype : 'panel',

                height :600,
                layout : 'vbox',

                    items : [
                        {
                            xtype:  'recuListe',
                            width : '100%',
                            flex :1,

                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'center'
                            },

                            items: [{
                                xtype: 'button',
                                //margin: 20,
                                //reference: 'btnEnregMembreRef',
                                scale: 'small',
                                ui: 'green',
                                style : {
                                    marginLeft : '5.5%'
                                },
                                iconAlign: 'right',
                                iconCls: 'x-fa fa-print',
                                //text: 'Enregistrer',
                                //formBind: true,
                                //listeners: {
                                 //   click: 'onEnregMembreButtonClick'
                                //}

                            }]
                        },

                        {
                            xtype:  'recuListe',
                            width : '100%',
                            flex :1
                        }
                    ]
            }]


        }).show();
        //var grid = Ext.ComponentQuery.query("retraitListe[title='RETRAIT']")[0];
        //console.log(grid);
        //var printer = Ext.ux.grid.Printer;
        //printer.printAutomatically = false;
        //printer.print(grid);
    }

     */


});