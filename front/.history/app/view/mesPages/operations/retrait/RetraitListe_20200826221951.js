Ext.define('zonblewou.view.mesPages.operations.retrait.RetraitListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'retraitListe',

    title: 'RETRAIT',

    //bodyPadding: 10,

    reference: 'retraitGridRef',

    requires: [

        'zonblewou.store.mesStore.Retrait',

        'zonblewou.view.mesPages.operations.retrait.RetraitFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        //store: profil,
        itemId: 'userPaginationToolbar',
        displayInfo: true,
        //bind: '{usersResults}'
    }],

    controller: 'retraitform',


    store: {
        type: 'retrait'
    },


    //viewModel: {
    //    type: 'searchresults'
    //},

    //cls: 'shadow',
    //activeTab: 0,
    //margin: 20,

    //items: [{
    //xtype: 'gridpanel',
    cls: 'user-grid',
    //title: 'LISTE DES MEMBRES',
    //routeId: 'user',
    //bind: '{usersResults}',
    //scrollable: false,
    columns: [{
            xtype: 'rownumberer',
            width: 40,
            //dataIndex: 'identifier',
            text: '#'
        },
        /*
          {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'id',
            text: 'Identifiant',
            //flex: 0.15,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'idMembre',
            text: 'IdentifiantMembre',
            //flex: 0.15,
            hidden: true
        },
         {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'idCompte',
            text: 'IdentifiantCompte',
            //flex: 0.15,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'idUser',
            text: 'IdentifiantUser',
            //flex: 0.15,
            hidden: true
        },
        */

        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'numCompte',
            text: 'Numéro de compte',
            flex: 1
        },
        {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'dateOperation',
            text: 'Date d\'opération',
            flex: 1,
            format: 'd/m/Y'

        },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'montantOperation',
            text: 'Montant ',
            flex: 1,

            renderer: function(value) {
                return Ext.String.format('{0}  FCFA', value);
            }
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'titulaire',
            text: 'Titulaire du compte',
            flex: 1
        },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: 'RETRAIT',
            text: 'Type d\'opération',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'typeOpp',
            text: 'Opportunité',
            flex: 1,
            renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                //console.log(value);
                if (value == "oct") {
                    return "COURT TERME";
                } else if (value == "omt") {
                    return "MOYEN TERME";
                } else if (value == "olt") {
                    return "LONG TERME";
                }

            }
        },

    ],

    //}]

});