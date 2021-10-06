/**
 * This view is an example list of people.
 */
Ext.define('MutrasstoApp.view.commande.CommandeFormulaire', {
    extend: 'Ext.grid.Panel',

    xtype: 'formulaire-commande',

    requires: [
        'MutrasstoApp.store.commande.Commande'
    ],

    title: 'Effectuer une Ccmmande',

    store: {
        type: 'commande'
    },

    stripeRows: false,
    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '<h1>{name}</h1>',
        hideGroupedHeader: false,
        enableGroupingMenu: false
    }],
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    selModel: 'cellmodel',

    columns: [
        //  { text: 'Categorie',  dataIndex: 'libelle_categorie' , flex: 1},
        {
            text: 'Article',
            dataIndex: 'nom_produit',
            flex: 1
        },
        {
            text: 'Prix',
            dataIndex: 'prix',
            summaryRenderer: function(value, x, y) {
                return '<h3>         Sous Total  = {value.} </h3>'
            }
        },
        {
            text: 'Quantité',
            dataIndex: 'quantite',
            editor: {
                completeOnEnter: false,
                field: {
                    xtype: 'numberfield',
                    allowBlank: false
                }
            },
            summaryType: 'sum',
            summaryRenderer: function(value, x, y) {
                return '<h3> ' + value + '</h3>'
            }
        }
    ],

    listeners: {
        //select: 'onItemSelected'
        celldblclick: 'onItemSelected'
    }
});