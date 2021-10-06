/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.etats.EtatCaisseController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.etatcaissecontroller',



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

   /* onDateFieldOfEtatRetraitChange: function(field, value)
    {

        var me = this,
            v = me.getView(),
            myStore = v.getStore(),
            dateSelec = field.getSubmitValue();

        myStore.removeAll();

        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/operation/retraitParDate?classe=Operation&format=json',

            params: { 'dateOperation': dateSelec },

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

                    Ext.toast({
                        html: response['msg'],
                        title: 'ERREUR',
                        width: 200,
                        align: 't'
                    });

                } else if (response['error'] == false) {

                    Ext.toast({
                        html: response['msg'],
                        title: 'SUCCES',
                        width: 200,
                        align: 't'
                    });

                    for ($i=0; $i<= response['nbLigne']; $i++)
                    {
                        myStore.add(response['donne'][$i])

                    }


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

    onEtatRetraitComboMoisSelect : function (combo, record)
    {


        var me = this,
            v = me.getView(),
            myStore = v.getStore();

            //cbAgent = me.lookupReference('operateurComboEtatRetraitRef');

       // cbAgent.setDisabled(false);

        myStore.removeAll();

        var code = record.get('code');

        console.log(record.get('code'));

        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/operation/retraitParMois?classe=Operation&format=json',

            params: { 'codeMois': code },

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

                    Ext.toast({
                        html: response['msg'] + " de "+ record.get('mois'),
                        title: 'ERREUR',
                        width: 200,
                        align: 't'
                    });

                } else if (response['error'] == false) {

                    Ext.toast({
                        html: response['msg'],
                        title: 'SUCCES',
                        width: 200,
                        align: 't'
                    });

                    for ($i=0; $i< response['nbLigne']; $i++)
                    {
                        myStore.add(response['donne'][$i])

                    }


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

    onEtatRetraitComboOperateurSelect : function(combo, record)
    {

        // vérifier si le combo de mois est sélectionné
        var me = this,
            v = me.getView(),
            myStore = v.getStore(),
            cbMois = me.lookupReference('moisComboEtatRetraitRef'),
            codeMois = cbMois.getValue(),
            idUser = record.get('id');

        console.log(codeMois);
        console.log('codeMois');
        console.log(idAgent);

        myStore.removeAll();
        // requete
        Ext.data.JsonP.request({

            url: zonblewou.vars.AllVars.url + '/api/operation/retraitOperateurParMois?classe=Operation&format=json',

            params: { 'codeMois': codeMois, 'idUser':idUser },

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

                if (response['error'] === true) {

                    Ext.toast({
                        html: response['msg'] + " pour " + record.get('login'),
                        title: 'ERREUR',
                        width: 200,
                        align: 't'
                    });

                } else if (response['error'] === false) {

                    Ext.toast({
                        html: response['msg'],
                        title: 'SUCCES',
                        width: 200,
                        align: 't'
                    });

                    for ($i=0; $i< response['nbLigne']; $i++)
                    {
                        myStore.add(response['donne'][$i])

                    }


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

    */

    onBtnEtatCaissePrint : function()
    {
        var grid = this.getView();
        //console.log(grid);
        var printer = Ext.ux.grid.Printer;
        printer.printAutomatically = false;
        printer.print(grid);
    },


});