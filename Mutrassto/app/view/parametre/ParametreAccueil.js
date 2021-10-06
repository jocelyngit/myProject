Ext.define('MutrasstoApp.view.parametre.ParametreAccueil', {
    extend: 'Ext.tab.Panel',

    xtype: 'page-accueil-parametre',
    activeTab: 0,

    ui: 'navigation',
    requires: [
        'MutrasstoApp.view.parametre.ParametreController'

    ],

    controller: 'parametre',

    items: [{
        title: 'Catégorie',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Catégorie de produit'
        },
        items: [{
            xtype: 'categorieFormulaireGridHbox'
        }]

    }, {
        title: 'Divisions',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Divisions'
        },
        items: [{
            xtype: 'divisionFormulaireGridHbox'
        }]
    }, {
        title: 'Services',
        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Services'
        },
        items: [{
            xtype: 'servicesFormulaireGridHbox'
        }]
    }, {
        title: 'Profil',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Profil du membre'
        },
        items: [{
            xtype: 'profilFormulaireGridHbox'
        }]

    }, {
        title: 'Situation matrimoniale',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Situation matrimoniale'
        },
        items: [{
            xtype: 'situationMatrimonialeFormulaireGridHbox'
        }]

    }, {
        title: 'Site',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Site de livraison'
        },
        items: [{
            xtype: 'siteLivraisonFormulaireGridHbox'
        }]


    }, {
        title: 'Type d\'assistance',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Type d\'assistance'
        },
        items: [{
            xtype: 'typeAssistanceFormulaireGridHbox'
        }]

    }, {
        title: 'Lien Parent',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Type de parent'
        },
        items: [{
            xtype: 'lienParentFormulaireGridHbox'
        }]


    }, {
        title: 'Type de crédit',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Type de crédit'
        },
        items: [{
            xtype: 'typeCreditFormulaireGridHbox'
        }]

    }, {
        title: 'Type d\'opération',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Type d\'opération'
        },
        items: [{
            xtype: 'typeOperationFormulaireGridHbox'
        }]


    }, {
        title: 'Paiement',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Mode de paiment'
        },
        items: [{
            xtype: 'modePaiementFormulaireGridHbox'
        }]


    }, {
        title: 'Cotisation',

        tabConfig: {
            //title: 'Custom Title',
            tooltip: 'Cotisation'
        },
        // items: [{
        //    xtype: 'modePaiementFormulaireGridHbox'
        //}]


    }]


});