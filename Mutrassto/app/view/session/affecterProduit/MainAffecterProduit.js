Ext.define('MutrasstoApp.view.session.affecterProduit.MainAffecterProduit', {
    extend: 'Ext.Container',

    xtype: 'mainAffecterProduitGrid',
    layout: {
        type: 'hbox',
        align: 'stretch',
        padding: 5
    },


    requires: [
        'MutrasstoApp.view.session.affecterProduit.ProduitAffecterListe',
        'MutrasstoApp.view.session.affecterProduit.AffecterProduitListe',
        'Ext.form.Panel'
        //'MutrasstoApp.view.session.SessionGridModel'

    ],

    //controller: 'session',
    //viewModel: 'sessiongridviewmodel',

    items: [{
            default: {
                layout: 'vbox'
            },
            items: [{

                xtype: 'combo',
                fieldLabel: 'Session',
                name: 'session',
                // id: 'comboSessionProduitForm',
                store: {
                    type: 'session',
                    autoLoad: true,
                    data: [{
                        name: 'id',
                        name: 'dateDebutSession'
                    }]
                },
                queryMode: 'local',
                displayField: 'dateDebutSession',
                valueField: 'id',
                allowBlank: false,
                blankText: 'Ce champ est obligatoire',
                forceSelection: true,
                editable: false
            }, {

                xtype: 'liste-affecterProduit',
                //reference: 'refSessionGrid',
                //flex: 1,
                //margin: '50 0'

            }],
            flex: 1,
            margin: 10
        },
        {
            xtype: 'liste-produitAffecter',
            flex: 1,
            margin: '51 0'

        }
    ],

    //}

    //]


});