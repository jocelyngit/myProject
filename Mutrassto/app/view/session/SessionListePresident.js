Ext.define('MutrasstoApp.view.session.SessionListePresident', {
    extend: 'Ext.grid.Panel',

    xtype: 'listeSessionPresident',

    //bind: '{session}',
    //reference: 'refSessionGrid',

    id: 'idSessionGridPresident',
    margin: 10,

    requires: [
        'MutrasstoApp.store.session.Session',
        'MutrasstoApp.view.session.SessionController',
        'MutrasstoApp.view.session.SessionGridModel',
        'Ext.grid.column.Action',
        Ext.tip.QuickTipManager.init()

    ],
    //viewModel: {
    //   type: 'sessiongridviewmodel'
    //},

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Ajouter',
            iconCls: 'x-fa fa-plus'
        }]
    }],


    title: 'Liste des sessions',
    store: {
        type: 'session'
    },

    columns: [
        { text: 'Numéro', xtype: 'rownumberer', },
        { text: 'Identifiant', dataIndex: 'id' },
        { text: 'Date de début', dataIndex: 'dateDebutSession', renderer: Ext.util.Format.dateRenderer('d/m/Y'), flex: 1 },
        { text: 'Etat', dataIndex: 'etatEvenement', flex: 1 },
        {
            text: 'Actions',
            xtype: 'actioncolumn',
            //width: 50,
            items: [{
                iconCls: 'x-fa fa-play',
                tooltip: 'Démarrer',
                id: 'idTooltipDemarrerSessionGridPresident',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    console.log(rec['id']);

                    rec.data['etatEvenement'] = 2;

                    console.log(rec.data['etatEvenement']);

                    var d = rec.data;

                    console.log(d);

                    var gridSessionPresident = Ext.getCmp('idSessionGridPresident');

                    //REQUETE POUR DEMARRER LA SESSION
                    Ext.data.JsonP.request({

                        params: d,

                        url: 'http://localhost:8080/session/update?classe=Session&format=json',

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

                            if (response['success'] == true) {
                                //AFFICHAGE DU MESSAGE A L4UTILISATEUR

                                Ext.toast('Session démarrée', 'STATUT');
                                // RAFRAICHIR LA GRID SESSION
                                //var gridSession = Ext.getCmp('idCategorieGrid');
                                gridSessionPresident.rafraichir();

                                // DESACTIVER TOOLTIP DEMARRER
                                //this.hideAt(rowIndex);
                                //this.getTip().hide();

                                //MONTRER TOOLTIP CLOTURE

                                Ext.getCmp('idTooltipDemarrerSessionGridPresident').getTip().hide();

                            } else {
                                Ext.Msg.alert('DESOLE', response['msg']);
                            }

                            // DESACTIVER LE BOUTON
                            //this.disable();

                        },

                        failure: function(response) {
                            Ext.Msg.alert('DESOLE', 'SERVEUR INDISPONIBILITE!! VEUILLEZ REESSAYER PLUS TARD');
                            //Ext.Msg.alert('Failed', action.result.msg);
                        }
                    })
                }
            }, {
                iconCls: 'x-fa fa-stop',
                tooltip: 'Clôturer',
                id: 'idTooltipClotureSessionGridPresident',
                enable: false,
                handler: function(grid, rowIndex, colIndex) {
                    //var rec = grid.getStore().getAt(rowIndex);
                    alert("Clôturer ");
                }
            }],
            flex: 0.5
        }

    ],


    rafraichir: function() {
        var store = this.getStore();
        store.reload()
    }


});