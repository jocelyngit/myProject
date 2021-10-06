Ext.define('MutrasstoApp.view.commande.FormulaireDeCommande', {
    extend: 'Ext.form.Panel',

    xtype: 'formulaireDeCommandes',
    id: 'idCommanderForm',
    autoScroll: true,

    ref: 'refCommandeFormulaire',

    layout: 'vbox',

    requires: [
        'MutrasstoApp.store.commander.Commander',
        'MutrasstoApp.view.commande.CommandeController',
        'MutrasstoApp.view.main.MainModel',
        'MutrasstoApp.variableGlobale.VariableGlobale',

        'Ext.form.Panel'
    ],

    controller: 'commander',

    //viewModel: 'main',

    //viewModel: 'commandeviewmodel',

    title: 'Passez votre commande',

    store: {
        type: 'commander'
    },


    items: [{

        layout: 'hbox',
        items: [{
            xtype: 'label',
            text: 'Produit',
            flex: 1,
            margin: '10 90 10 90',
            textAlign: 'left'


        }, {
            xtype: 'label',
            text: 'Quantité',
            flex: 1,
            margin: '10 90 10 90',
            textAlign: 'left'

        }, {
            xtype: 'label',
            text: 'Prix',
            flex: 1,
            margin: '10 90 10 90',
            textAlign: 'left'

        }, {
            xtype: 'label',
            text: 'Montant',
            flex: 1,
            margin: '10 90 10 90',
            textAlign: 'left'
        }]

    }],
    /*{
        
        allowBlank: false,
        fieldLabel: 'Prix',
        minValue: 0,
        value: 0,
        blankText: 'Ce champ est obligatoire',
        vtypes: 'renseignerSaLigne',
        vtypesText: 'La quantité ne peut pas être nulle'
    },*/
    /*{
        xtype: 'numberfield',
        fieldLabel: 'Quantité',
        allowBlank: false,
        minValue: 0,
        value: 0,
        blankText: 'Ce champ est obligatoire',
        vtypes: 'renseignerSaLigne',
        vtypesText: 'La quantité ne peut pas être nulle'
    }*/


    buttons: [{
        text: 'Envoyer',
        scale: 'medium',
        iconCls: 'x-fa fa-send',
        formBind: true,
        //disabled: true,

        handler: function() {

            // RECUPERATION DES ELEMENTS DU STORE
            // POUR DYNAMISER LE FORMULAIRE DES COMMANDES
            //

            var cmde = MutrasstoApp.store.commander.Commander.data;

            var donnees = '['

            d = this.up('form').getForm().getValues();

            //d['dateCommande'] = new Date("2019 - 06 - 10");
            // SPECIFICATION DE LA DATE DE LA COMANDE
            //

            // VARIABLE DE TEST
            var selection = false;


            // PARCOURS POUR RECUPERER LES ELEMENTS
            //
            // PARCOURS DU FLUX JSON 
            // POUR TRIER LES LIGNES SELECTIONNEES
            // POUR ENVOIE AU SERVEUR
            //


            for (var i = 0; i < cmde.length - 1; i++) {

                if (d['quantite'][i] != 0) {

                    // QUANTITE SELECTIONNEE
                    selection = true

                    //
                    // ECRITURE DE LA DONNEE
                    //

                    // donnees = donnees + "'" + "productId" + "':" + d['productId'][i] + "," + "quantite" + "':" + d['quantite'][i] + ",";

                    donnees = donnees + "'" + d['productId'][i] + "':" + d['quantite'][i] + ",";

                }

            }

            if ((d['quantite'][cmde.length - 1] == 0) && (selection == false)) {

                //
                // MESSAGE D'ERREUR
                //
                Ext.Msg.alert('Erreur', 'Veuillez selectionner une quantité', Ext.emptyFn);

            } else {

                if (d['quantite'][cmde.length - 1] != 0) {

                    //donnees = donnees + "'" + "productId" + "':" + d['productId'][cmde.length - 1] + "," + "quantite" + "':" + d['quantite'][cmde.length - 1] + "]";

                    donnees = donnees + "'" + d['productId'][cmde.length - 1] + "':" + d['quantite'][cmde.length - 1] + "]";

                } //else{

                //  donnees = donnees + "]";
                // }

            }

            console.log('donnees integrale');
            console.log(donnees);


            //
            // RECUPERATION DE LA VARIABLE DE L'IDENTIFIANT
            //
            var identifiant = MutrasstoApp.variableGlobale.VariableGlobale.identifiantConnecte

            d['traitement'] = 1;
            var trait = d['traitement'];
            console.log(trait);


            // CONSTRUCTION DU FLUX JSON POUR ENVOIE DANS LA BASE DE DONNEE

            var donneesEnStringify = JSON.stringify({ 'ligneCommande': donnees });

            console.log('donnéés en stringify');
            console.log(donneesEnStringify);

            // console.log(d['montant']);

            // FABRICATION DU FLUX JSON


            var url = 'http://localhost:8080/commande/enregistrerCommande?classe=Commande&format=json'
                // ENVOIE DE LA REQUETE AU SERVEUR
            Ext.data.JsonP.request({
                //extraParams: 'titi',
                params: {
                    membre: identifiant,
                    traitement: trait,
                    //commande:donnees,
                    donneesEnStringify,

                },
                url: url,
                writer: {
                    type: 'json'
                },
                reader: {
                    type: 'json'
                },
                callbackKey: 'callback',
                scope: 'this',
                success: function(response) {},


                failure: function(response) {
                    Ext.Msg.alert('DESOLE', 'SERVEUR INACESSIBLE OU PROBLEME AVEC LE SERVEUR !');
                }
            });
        }

    }],


    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    },


    recupereStore: function(fld, eOpts) {

        // PARCOURS DU STORE POUR AVOIR LES ELEMENTS

        console.log('Bonjour')

        var store = fld.getStore();

        if (store.buffered) {
            // forEach is private and part of the private PageMap
            console.log(store.data.forEach(function(record, recordIdx) {
                /* Do stuff with the record here */
            }, this));
        } else {
            store.each(function(record) {
                /* Do the same stuff I guess */
            }, this);
        }

        // OU BIEN
        /* if(store.buffered) {
             store.iterate = store.data.forEach;
         } else {
             store.iterate = store.each;
         }*/

        // OUBIEN
        /* myStore.data.each(function(item, index, totalItems ) {
            alert(item.data ['oneOfMyColumnNames']);
         })*/

    }

})