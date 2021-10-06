Ext.define('MutrasstoApp.view.assistance.DemandeAssistance', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaire-assistance',

    id: 'formulaireAssistance',
    title: 'DEMANDER UNE ASSISATANCE',
    layout: 'form',
    frame: true,
    margin: 100,

    fileUpload: true,
    hasUpload: true,
    isUpload: true,
    enctype: 'multipart/form-data',
    contentType: 'text/plain',
    // bodyStyle: 'padding: 10px 10px 0 10px; margin: 10px 50px 0 50px',

    requires: [
        'MutrasstoApp.store.parametre.typeAssistance.TypeAssistance',
        'MutrasstoApp.variableGlobale.VariableGlobale'

    ],

    items: [{

            xtype: 'combo',
            fieldLabel: 'Type d\'assistance',
            name: 'typeAssistance',
            id: 'comboTypeAssistanceAssistanceForm',
            store: {
                type: 'typeAssistance',
                data: [{
                    name: 'id',
                    name: 'typeAssistance'
                }]
            },
            queryMode: 'local',
            displayField: 'typeAssistance',
            valueField: 'id',
            allowBlank: false,
            blankText: 'Ce champ est obligatoire',
            forceSelection: true,
            editable: false,

            /*: {
                select: {
                    fn: function() {
                        var valeurSelection = this.getValue();

                        var champActeNaissance = Ext.getCmp('idAssistanceFormActeNaissanceField');
                        var champActEtatcivil = Ext.getCmp('idAssistanceFormActEtatcivilField');

                        if (valeurSelection == 1) {
                            champActeNaissance.hide();
                            champActEtatcivil.hide();

                        } else {
                            if (valeurSelection == 2) {

                                // Rendre visible le champ Acte de déces
                                //champActeNaissance.show();
                                champActEtatcivil.show();

                            } else {
                                if (valeurSelection == 3) {
                                    champActeNaissance.show();

                                }
                            }
                        }

                    }
                },


            }*/



        },
        {
            xtype: 'filefield',
            name: 'acteDeces',
            id: 'idAssistanceFormActeDecesField',
            fieldLabel: 'Acte de décès',
            emptyText: 'Sélectionner votre fichier',
            msgTarget: 'side',
            allowBlank: false,
            buttonText: 'Parcourir',
            accept: '.pdf',
            /* listeners: {
                 change: function(fileUploadComponent, value, eOpts) {
                     this.onFileChange(fileUploadComponent, value, eOpts);
                 },
                 //hidden: true
             },*/
            /* onFileChange: function(fileUploadComponent, value, eOpts) {
                 var file = Ext.getCmp('idAssistanceFormActeDecesField').getEl().down('input[type=file]').dom.files[0];
                 if (file != null) {
                     var reader = new FileReader();
                     reader.readAsArrayBuffer(file);
                     reader.onloadend = function(oFREvent) {
                         var byteArray = new Uint8Array(oFREvent.target.result);
                         var len = byteArray.byteLength;
                         var binary = '';
                         for (var i = 0; i < len; i++) {
                             binary += String.fromCharCode(byteArray[i]);
                         }
                         byteArray = window.btoa(binary);
                         //alert(byteArray);
                     }
                 }
             }*/

            /*{
                   xtype: 'filefield',
                   name: 'acteNaissance',
                   id: 'idAssistanceFormActeNaissanceField',
                   fieldLabel: 'Acte de naissance',
                   //labelWidth: 50,
                   msgTarget: 'side',
                   allowBlank: false,
                   buttonText: 'Selectionnez le fichier...',
                   accept: '.pdf',
                   hidden: true
               }, {
                   xtype: 'filefield',
                   name: 'actEtatcivil',
                   id: 'idAssistanceFormActEtatcivilField',
                   fieldLabel: 'Acte d\'état civil',
                   //labelWidth: 50,
                   msgTarget: 'side',
                   allowBlank: false,
                   buttonText: 'Selectionnez le fichier...',
                   accept: '.pdf',
                   hidden: true
                   **/
        }, {
            xtype: 'textfield',
            name: 'lieuSurvenu',
            //id: 'idAssistanceFormLieuSurvenuField',
            fieldLabel: 'Lieu survenu',
            allowBlank: false, // requires a non-empty value
            //hidden: true
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date survenu',
            name: 'dateSurveue',
            //id: 'idAssistanceFormDateSurvenuField',
            allowBlank: false,
            format: 'd-m-Y',
            //bind: '{selection.dateSession}',
            blankText: 'Ce champ est obligatoire',
            submitFormat: 'Y-m-d',
            maxValue: new Date(), // defaults to today
            //hidden: true
        }, {
            xtype: 'textfield',
            name: 'lieuEnterrement',
            //id: 'idAssistanceFormLieuEnterrementField',
            fieldLabel: 'Lieu d\'enterrement',
            allowBlank: false,
            //hidden: true
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date enterrement',
            name: 'dateEnterrement',
            //id: 'idAssistanceFormDateEnterrementField',
            allowBlank: false,
            format: 'd-m-Y',
            //bind: '{selection.dateSession}',
            blankText: 'Ce champ est obligatoire',
            submitFormat: 'Y-m-d',
            //hidden: true
        }
    ],

    buttons: [{

        text: 'Envoyer',
        scale: 'medium',
        iconCls: 'x-fa fa-send',
        formBind: true,
        //listners: {
        //    Click: 'onSessionBtnEnregistrerClick'
        // }

        handler: function() {
            var d = this.up('form').getForm().getValues();

            /* function global() {
                 window.value = null;
             }

             var d = this.up('form').getForm().getValues();
             // AFFICHAGE DU FICHIER AU FORMAT CHAINE DE CARACTERE

             var file = Ext.getCmp('idAssistanceFormActeDecesField').getEl().down('input[type=file]').dom.files[0];

             var reader = new FileReader();
             var base64;
             reader.addEventListener('onload', function() {
                 base64 = reader.result;
             });
             reader.readAsDataURL(file);

             //while (reader.result === undefined) {}
             setTimeout(() => {
                 console.log(base64);
             }, 2400);


             //setTimeout(() => { */

            d['membre'] = 2;

            d['etatDemande'] = 1;

            d['traitement'] = 1;

            d['actEtatCivil'] = 'etacivil';

            d['acteNaissance'] = 'acteNaissance';


            Ext.data.JsonP.request({

                    params: d,

                    url: 'http://localhost:8080/assistance/create?classe=Assistance&format=json',

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
                        //Ext.Msg.alert('Success', action.result.msg);
                        if (response['success'] == true) {
                            //AFFICHAGE DU MESSAGE A L4UTILISATEUR
                            Ext.toast(response['msg'], 'STATUT');

                            // RAFRAICHIR LA GRID SESSION
                            //var gridSession = Ext.getCmp('idCategorieGrid');
                            //gridSession.rafraichir();

                            // DESACTIVER LE BOUTON
                            //this.disable();

                            //Affichage DANS LA CONSOLE
                            console.log(response['success']);
                        } else {
                            Ext.Msg.alert(response['msg'], 'STATUT');
                            console.log(response['success']);
                        }

                    },

                    failure: function(response) {
                        Ext.Msg.alert('DESOLE', response);
                        //Ext.Msg.alert('Failed', action.result.msg);
                    }
                })
                //}, 5000);;





            //console.log(d);


            //console.log(d);

            /*Ext.Msg.prompt('Name', 'Please enter your name:', function(btn, text) {
                if (btn == 'ok') {
                    // process text value and close...
                }
            });*/
            //console.log(d);
        }

    }],



});