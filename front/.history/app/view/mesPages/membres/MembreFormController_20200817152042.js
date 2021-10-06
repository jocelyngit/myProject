//import btn from '../../../../ext/classic/theme-classic/resources/images/button/btn.gif';
//import file from '../../../../.sencha/temp/.ide/file.json';
/**
 * @class zonblewou.view.forms.WizardFormController
 */
Ext.define('zonblewou.view.mesPages.membres.MembreFormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.membreform',

    requires: [
        'Ext.util.Floating'
    ],

    /*
      TOAST
    */

    /*
       showToast: function(text) {
     Ext.toast({
     html: text,
     closable: false,
     align: 't',
     slideInDuration: 400,
     minWidth: 400
     });
     }
    */


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
    onFileChange: function(widget, value, eOpts) {

         var files = event.target.files

         //console.log(files);
         self = this; // the controller
         if (!files || files.length == 0) return; // make sure we got something
         // Let's read content as file
         var reader = new FileReader();

         reader.onload = function(e) {
             // image content is in e.target.result
             // we can then put it into img.src, for example

             self.lookupReference('membrePicture').setSrc(e.target.result);

             self.lookupReference('photoMembreRef').value = e.target.result;

             self.lookupReference('fileContentRef').value = e.target.result;

             //console.log(e.target.result);

             return e.target.result;

         };
         reader.readAsDataURL(files[0]);

     },
      
    */

    /*
      onMembreAjoutClick: function(btn) {

        var me = this; // this controller

        var main = me.getView();

        //main.floatingItems.get('membreWinItemId').show();

        //var comp = Ext.ComponentQuery.query('[membreWinItemId]');



        Ext.create('widget.membrewinform', {

            //title: 'hello window'
        }).show();

    },
    */


    // click sur le tbar consulter
    /*
         onTbarConsulterClick: function() {
            var me = this;

            var form = me.lookupReference('formMembreRef');

            //faire disparaitre le formulaire
            form.getview().destroy();

            // message d'alerte
            //Ext.Msg.alert('Info', 'icon consulter');
        },
    */

    onMembreBtnAjouter: function() {

        Ext.create('zonblewou.view.mesPages.membres.MembreFormulaire', {

        })
    },

    // click sur le boutton enregister
    // Membre formulaire
    onEnregMembreButtonClick: function() {

        var me = this;

        var form = me.lookupReference('formMembreRef');

        var p = form.getValues();

        console.log(p);

        //gride du membre
        var grid = Ext.ComponentQuery.query("membreListe[title='LISTE DES MEMBRES']");

        console.log(grid);

        var record = grid[0]['store'];

        console.log(record);

        var membreFormView = this.getView();

        // format date
        //var myDate = parse(p['dateAdhesion']);

        //myDate = myDate.split("/");

        //var newDate = new Date(parseInt(myDate[2], 10), parseInt(myDate[1], 10) - 1, parseInt(myDate[0]), 10).getTime();

        //var newDate = Math.round(new Date().getTime() / 1000);

        //console.log(newDate);
        //p['dateAdhesion'] = myDate;
        //p['idUser'] = zonblewou.vars.AllVars.idUser;
        p['idUser'] = 1;
        p['numeroMembre'] = '';

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

                        url: zonblewou.vars.AllVars.url + '/api/membre/store?classe=Membre&format=json',

                        params: p,

                        writer: {
                            type: 'json'
                        },

                        reader: {
                            type: 'json'
                        },

                        callbackKey: 'callback',

                        disableCaching: false,

                        scope: me,

                        success: function(response) {

                            if (response['original']['error'] == false) {

                                /*
                                   AFFICHAGE DU MESSAGE A L4UTILISATEUR
                                */

                                membreFormView.close();

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

                                /*
                                  CHARGEMENT  GRID
                                */

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

                                // console.log(response['success']);
                            }

                        },

                        failure: function() {

                            //Ext.Msg.alert('DESOLE', 'Echec de la requête');

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
                            })

                        }

                    })
                } else if (btn === 'no') {}
            }
        });



    },



    onEditMembreAction: function(grid, rowIndex, colIndex) {
        //Ext.Msg.alert('reponse du grid', 'STATUT');

        var rec = grid.getStore().getAt(rowIndex);

        console.log(rec.data);

        Ext.create('Ext.window.Window', {

            title: 'MODIFICATION',

            shadow: true,

            controller: 'membreform',
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
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            //align: 'strech'
                        },

                        defaults: {
                            labelWidth: 90,
                            labelAlign: 'top',
                            labelSeparator: '',
                            submitEmptyText: false,
                            margin: 10
                        },

                        items: [{
                                xtype: 'hiddenfield',
                                name: 'id',
                                value: rec.get('id')
                            }, {
                                xtype: 'textfield',
                                emptyText: 'Nom',
                                allowBlank: false,
                                name: 'nomMembre',
                                blankText: 'Ce champ est obligatoire',

                                msgTarget: 'side',

                                listeners: {
                                    change: function(field, newValue) {

                                        newValue = newValue.toUpperCase();

                                        this.setValue(newValue);

                                    }
                                },

                                value: rec.get('nomMembre')

                            },
                            {
                                xtype: 'tbspacer',
                                width: 15
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Prénoms',
                                allowBlank: false,
                                name: 'prenomMembre',
                                blankText: 'Ce champ est obligatoire',
                                msgTarget: 'side',

                                value: rec.get('prenomMembre')

                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            //align: 'strech'
                        },
                        defaults: {
                            labelWidth: 90,
                            labelAlign: 'top',
                            labelSeparator: '',
                            submitEmptyText: false,
                            margin: 10
                                //width: '100%',
                        },
                        items: [{
                                xtype: 'combo',
                                emptyText: 'Sexe',
                                allowBlank: false,
                                name: 'sexe',
                                blankText: 'Ce champ est obligatoire',
                                store: {
                                    type: 'sexe',
                                    autoLoad: true
                                },
                                queryMode: 'local',
                                displayField: 'valeur',
                                valueField: 'code',
                                editable: false,
                                msgTarget: 'side'

                            },
                            {
                                xtype: 'tbspacer',
                                width: 15
                            },
                            {
                                xtype: 'combo',
                                emptyText: 'Sit. Matrimoniale',
                                allowBlank: false,
                                name: 'sitMatrimoniale',
                                blankText: 'Ce champ est obligatoire',
                                store: {
                                    type: 'sitmat',
                                    autoLoad: true
                                },
                                queryMode: 'local',
                                displayField: 'valeur',
                                valueField: 'code',
                                editable: false,
                                msgTarget: 'side',

                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            //align: 'strech'
                        },
                        defaults: {
                            labelWidth: 90,
                            labelAlign: 'top',
                            labelSeparator: '',
                            submitEmptyText: false,
                            margin: 10
                                // width: '100%',
                        },
                        items: [{
                                xtype: 'textfield',
                                emptyText: 'Profession / Fonction',
                                allowBlank: false,
                                name: 'profession',
                                blankText: 'Ce champ est obligatoire',
                                msgTarget: 'side',

                                listeners: {
                                    change: function(field, newValue) {

                                        newValue = newValue.toUpperCase();

                                        this.setValue(newValue);

                                    }
                                },

                                value: rec.get('profession')
                            },
                            {
                                xtype: 'tbspacer',
                                width: 15
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Secteur d\'activité',
                                allowBlank: false,

                                name: 'secteurActivite',
                                blankText: 'Ce champ est obligatoire',

                                msgTarget: 'side',

                                listeners: {
                                    change: function(field, newValue) {

                                        newValue = newValue.toUpperCase();

                                        this.setValue(newValue);

                                    }
                                },

                                value: rec.get('secteurActivite')
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            //align: 'strech'
                        },
                        defaults: {
                            labelWidth: 90,
                            labelAlign: 'top',
                            labelSeparator: '',
                            submitEmptyText: false,
                            margin: 10
                                //width: '100%',
                        },
                        items: [{
                                xtype: 'textfield',
                                emptyText: 'Nationalité',
                                allowBlank: false,
                                name: 'nationalite',
                                blankText: 'Ce champ est obligatoire',
                                vtype: 'alpha',
                                msgTarget: 'side',

                                listeners: {
                                    change: function(field, newValue) {

                                        newValue = newValue.toUpperCase();

                                        this.setValue(newValue);

                                    }
                                },

                                value: rec.get('nationalite')
                            },
                            {
                                xtype: 'tbspacer',
                                width: 15
                            },
                            {
                                xtype: 'textareafield',
                                grow: true,
                                name: 'adresseMembre',
                                allowBlank: false,
                                emptyText: 'Adresse',
                                blankText: 'Ce champ est obligatoire',
                                msgTarget: 'side',

                                value: rec.get('adresseMembre')
                                    //maskRe: /^[a-zA-Z0-9\ \,]{0,}$/,
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            //align: 'strech'
                        },
                        defaults: {
                            labelWidth: 90,
                            labelAlign: 'top',
                            labelSeparator: '',
                            submitEmptyText: false,
                            margin: 10
                                //width: '100%',
                        },
                        items: [{
                                xtype: 'textfield',
                                emptyText: 'Téléphone',
                                allowBlank: false,
                                name: 'telMembre',
                                blankText: 'Ce champ est obligatoire',
                                msgTarget: 'side',
                                maskRe: /\d/,
                                //regex: /^\d{3}-\d{3}-\d{4}$/,
                                regex: /^([0-9]){8}$/,
                                //matcher: '/^[(+{1})|(00{1})]+([0-9]){7,10}$/'
                                regexText: 'format : 00000000',

                                value: rec.get('telMembre')

                            },
                            {
                                xtype: 'tbspacer',
                                width: 15
                            },
                            {
                                xtype: 'datefield',
                                emptyText: 'Date d\'adhésion',
                                allowBlank: false,
                                name: 'dateAdhesion',
                                blankText: 'Ce champ est obligatoire',
                                msgTarget: 'side',

                                editable: false,

                                maxValue: new Date(),

                                minValue: '08/04/2019',

                                format: 'd/m/Y',

                                submitFormat: 'Y/m/d H:i:s',

                                value: rec.get('dateAdhesion')

                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            //align: 'strech'
                        },
                        defaults: {
                            labelWidth: 90,
                            labelAlign: 'top',
                            labelSeparator: '',
                            submitEmptyText: false,
                            margin: 10
                                //width: '100%',
                        },
                        items: [{
                                xtype: 'numberfield',
                                emptyText: 'Mise',
                                //allowBlank: false,
                                name: 'mise',
                                //blankText: 'Ce champ est obligatoire',
                                //msgTarget: 'side',
                                //maxValue: 100000,
                                minValue: 300,

                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,

                                value: rec.get('mise')

                            },
                            {
                                xtype: 'tbspacer',
                                width: 15
                            },
                            {
                                xtype: 'textfield',
                                emptyText: 'Projet d\'avenir',
                                //allowBlank: false,
                                name: 'projetAvenir',
                                //blankText: 'Ce champ est obligatoire',
                                //msgTarget: 'side',

                                listeners: {
                                    change: function(field, newValue) {

                                        newValue = newValue.toUpperCase();

                                        this.setValue(newValue);

                                    }
                                },

                                value: rec.get('projetAvenir')
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'hbox',
                            //align: 'strech'
                        },
                        defaults: {
                            labelWidth: 90,
                            labelAlign: 'top',
                            labelSeparator: '',
                            submitEmptyText: false,
                            margin: 10
                                //width: '100%',
                        },
                        items: [{
                                xtype: 'numberfield',
                                emptyText: 'Durée du projet',
                                // allowBlank: false,
                                name: 'dureeProjet',
                                // blankText: 'Ce champ est obligatoire',
                                // msgTarget: 'side',
                                //maxValue: 20,
                                minValue: 0,

                                hideTrigger: true,
                                keyNavEnabled: false,
                                mouseWheelEnabled: false,

                                value: rec.get('dureeProjet')

                            },
                            {
                                xtype: 'tbspacer',
                                width: 15
                            },
                            {
                                xtype: 'combo',
                                emptyText: 'Agent Marketing',
                                allowBlank: false,
                                name: 'idMarketeur',
                                blankText: 'Ce champ est obligatoire',
                                store: {
                                    type: 'agentmarketing',
                                    autoLoad: true
                                },
                                queryMode: 'local',
                                //displayField: 'nomAg',
                                valueField: 'id',
                                editable: false,
                                forceSelection: true,
                                msgTarget: 'side',

                                tpl: Ext.create('Ext.XTemplate',
                                    '<ul class="x-list-plain"><tpl for=".">',
                                    '<li role="option" class="x-boundlist-item">{nomAg} {prenomAg}</li>',
                                    '</tpl></ul>'
                                ),
                                // template for the content inside text field
                                displayTpl: Ext.create('Ext.XTemplate',
                                    '<tpl for=".">',
                                    '{nomAg} {prenomAg}',
                                    '</tpl>'
                                )
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'center'
                        },

                        items: [{
                            xtype: 'button',
                            margin: 20,
                            reference: 'btnEnregMembreRef',
                            scale: 'small',
                            ui: 'green',
                            iconAlign: 'left',
                            iconCls: 'x-fa fa-save',
                            text: 'Modifier',
                            formBind: true,

                            handler: function() {

                                var p = this.up('form').getForm().getValues();

                                p['idUser'] = zonblewou.vars.AllVars.idUser;

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

                                                url: zonblewou.vars.AllVars.url + '/api/membre/update?classe=Membre&format=json',

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

                                                        // console.log(response['success']);
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



                            }

                        }]

                    }
                ]

            }

        }).show();
    },


    onShowMembreAction: function(grid, rowIndex, colIndex) {

        var rec = grid.getStore().getAt(rowIndex);

        console.log(rec.data);

        Ext.create('Ext.panel.Panel', {

            title: 'INFORMATIONS PERSONNELLES',

            requires: [
                'Ext.Template'
            ],

            shadow: true,

            bodyPadding: 5,

            controller: 'membreform',

            //layout: 'fit',

            floating: true,

            height: 400,

            width: 400,

            closable: true,

            // closeAction: 'close',

            modal: true

        }).show()
    }

});