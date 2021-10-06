//import store from '../../../../../.sencha/temp/.ide/store.json';
/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.compte.CompteFormController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.compteform',


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
    onEnregCompteButtonClick: function() {

        /*
            RECUPERATION DES DONNEES DU FORMULAIRE
        */

        var form = this.lookupReference('compteFormRef');

        var p = form.getValues();

        console.log(p);

        p['numCompte'] = '';

        p['idUser'] = zonblewou.vars.AllVars.idUser;

        /*
            RECUPERATION DU GRID
        */

        var grid = Ext.ComponentQuery.query("compteListe[title='LISTE DES COMPTES ZOMBLEWOU']");

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

                        url: zonblewou.vars.AllVars.url + '/api/compte/store?classe=Compte&format=json',

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

                            Ext.Msg.show({
                                title: 'CONFIRMATION',
                                msg: response['original']['msg'],
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

                    });
                } else if (btn === 'no') {}
            }
        });


    },

    /*
      MODIFICATION D'UTILISATEUR
    */

    onCompteEditAction: function(grid, rowIndex, colIndex) {
        //Ext.Msg.alert('reponse du grid', 'STATUT');

        var rec = grid.getStore().getAt(rowIndex);

        console.log(rec.data);

        Ext.create('Ext.window.Window', {

            title: 'MODIFICATION',
            //height: 200,
            width: 300,

            shadow: true,

            controller: 'compteform',
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
                    /*
                       {
                        xtype: 'datefield',
                        emptyText: 'Date de création',
                        allowBlank: false,
                        name: 'dateCreation',
                        blankText: 'Ce champ est obligatoire',
                        msgTarget: 'side',

                        editable: false,

                        maxValue: new Date(),

                        minValue: '08/04/2019',

                        format: 'd/m/Y',

                        submitFormat: 'Y/m/d H:i:s',

                        value: rec.get('dateCreation')
                    },
                    {
                        xtype: 'combo',
                        emptyText: 'Membre',
                        allowBlank: false,
                        name: 'idMembre',
                        blankText: 'Ce champ est obligatoire',
                        store: {
                            type: 'membre',
                            autoLoad: true
                        },
                        queryMode: 'local',
                        //displayField: 'nomMembre',
                        valueField: 'id',
                        editable: false,
                        msgTarget: 'side',

                        tpl: Ext.create('Ext.XTemplate',
                            '<ul class="x-list-plain"><tpl for=".">',
                            '<li role="option" class="x-boundlist-item">{nomMembre} {prenomMembre}</li>',
                            '</tpl></ul>'
                        ),
                        // template for the content inside text field
                        displayTpl: Ext.create('Ext.XTemplate',
                            '<tpl for=".">',
                            '{nomMembre}  {prenomMembre}',
                            '</tpl>'
                        )

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
                    */

                    {
                        xtype: 'numberfield',
                        emptyText: 'Solde',
                        allowBlank: false,
                        name: 'solde',
                        blankText: 'Ce champ est obligatoire',
                        msgTarget: 'side',
                        //maxValue: 100000,
                        minValue: 300,
                        value: rec.get('solde'),

                        // Remove spinner buttons, and arrow key and mouse wheel listeners
                        hideTrigger: true,
                        keyNavEnabled: false,
                        mouseWheelEnabled: false
                    },
                    {
                        xtype: 'button',
                        //reference: 'btnModifProfilRef',
                        scale: 'small',
                        ui: 'soft-green',
                        iconAlign: 'left',
                        iconCls: 'x-fa fa-edit',
                        text: 'Modifier',
                        formBind: true,

                        handler: function() {

                            var p = this.up('form').getForm().getValues();

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

                                url: zonblewou.vars.AllVars.url + '/api/compte/update?classe=Compte&format=json',

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
                                    });

                                }

                            })

                        },
                    }
                ]
            }

        }).show();

    },

});