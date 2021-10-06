Ext.define('MutrasstoApp.view.commande.CommandeController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.commander',


    requires: [
        'MutrasstoApp.store.commander.Commander',
        //'MutrasstoApp.view.commande.CommandeModel'
    ],

    // viewModel: 'commandeviewmodel',

    beforeRender: function(form) {

        // 
        //RECUPERER STORE AVANT RENDER (AFFICHAGE)
        //

        var commanderStore = MutrasstoApp.store.commander.Commander;

        var d = commanderStore.getData();

        var d1 = d.items;

        for (var i = 0; i < commanderStore.data.length; i++) {
            console.log(commanderStore.data.items[i].data.id);

            form.add({

                layout: 'hbox',
                items: [{
                    xtype: 'textfield',

                    //id: 'idProduitFormCommande',
                    hidden: true,
                    flex: 1,
                    value: commanderStore.data.items[i].data.id,
                    margin: 10,
                    name: 'productId',

                }, {
                    xtype: 'textfield',

                    //id: 'idProduitFormCommande',
                    editable: false,
                    flex: 1,
                    value: commanderStore.data.items[i].data.designation,
                    margin: 10,
                    name: 'produit',

                }, {
                    xtype: 'numberfield',
                    //itemId: 'itemIdCommandeFormQuantite',
                    // id: 'idQuantiteFormCommande',
                    publishes: 'value',
                    minValue: 0,
                    value: 0,
                    flex: 1,
                    margin: 10,
                    reference: 'refCommandeQuantiteField',
                    name: 'quantite',

                }, {
                    xtype: 'textfield',
                    // id: 'idPrixFormCommande',
                    //itemId: 'itemIdCommandeFormPrix',
                    flex: 1,
                    publishes: 'value',
                    editable: false,
                    reference: 'refCommandePrixField',
                    margin: 10,
                    value: commanderStore.data.items[i].data.prix,
                    name: 'prix'

                }, {
                    xtype: 'textfield',
                    // id: 'idMontantFormCommande',
                    //itemId: 'itemIdCommandeFormMontant',
                    flex: 1,
                    editable: false,
                    name: 'montant',
                    bind: {
                        value: '{change}'
                    },

                    margin: 10
                }]

            });

        }

        // CHARGER LES DONNEES DANS LES CHAMPS

    },

})