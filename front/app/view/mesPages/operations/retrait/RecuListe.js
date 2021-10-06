Ext.define('zonblewou.view.mesPages.operations.retrait.RecuListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'recuListe',

    //title: 'RETRAIT',

    //bodyPadding: 10,

    stripeRows        : true,

    columnLines: true,

    style: 'padding: 20px',

    reference: 'retraitGridRef',

    requires: [

        'zonblewou.store.mesStore.Retrait',

        'zonblewou.view.mesPages.operations.retrait.RetraitFormController'
    ],

    controller: 'retraitform',


    store: {
        type: 'retrait'
    },

   // dockedItems: [
        /*{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'tbfill' //#25
        },
            {
                xtype: 'button', //#27
                //formBind: true, //#28
                //iconCls: 'fa fa-sign-in fa-lg',
                //text: 'Submit'
                iconCls: 'fa fa-print',
                //href: '#recuContainer',
                //hrefTarget: '_self',
                text: 'Imprimer un reçu',
                //glyph: Packt.util.Glyphs.getGlyph('print'),
                listeners: {
                    click: 'onPrint'
                }
            }
        ]
    },

         */
       /* {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            //store: profil,
            itemId: 'userPaginationToolbar',
            displayInfo: true,
            //bind: '{usersResults}'
        }

        */
 //   ],

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
        //text: '#'
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
            text: 'NUMERO DE COMPTE',
            flex: 1
        },
        {
            xtype: 'datecolumn',
            cls: 'content-column',
            dataIndex: 'dateOperation',
            text: 'DATE D\'OPERATION',
            flex: 1,
            format: 'd/m/Y'

        },
        {
            xtype: 'numbercolumn',
            cls: 'content-column',
            dataIndex: 'montantOperation',
            text: 'MONTANT ',
            flex: 1,

            renderer: function(value) {

                var format = "0,000";

                Ext.util.Format.thousandSeparator = ".";

                Ext.util.Format.decimalSeparator  = ",";

                return Ext.String.format('{0}  FCFA', Ext.util.Format.number(value, format));
            },
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'titulaire',
            text: 'TITULAIRE DU COMPTE',
            flex: 1
        },
        {
            xtype: 'templatecolumn',
            cls: 'content-column',
            tpl: 'RETRAIT',
            text: 'TYPE D\'OPERATION',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'typeOpp',
            text: 'OPPORTUNITE',
            flex: 1,
            renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                //console.log(value);
                if (value === "oct") {
                    return "COURT TERME";
                } else if (value === "omt") {
                    return "MOYEN TERME";
                } else if (value === "olt") {
                    return "LONG TERME";
                }

            }
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'personneAgissant',
            text: 'PERSONNE AGISSANT',
            flex: 1,
            renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                //console.log(value);
                if (value === "LUI-MÊME") {
                    return "LUI-MÊME";
                } else if (value === "AUTRES PERSONNES") {
                    return  record.get('nomPagissant') + " " + record.get('prenomPagissant') ;
                }

            }
        }

    ],

    //}]

});