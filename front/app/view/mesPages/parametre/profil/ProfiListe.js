Ext.define('zonblewou.view.mesPages.parametre.profil.ProfiListe', {

    extend: 'Ext.grid.Panel',

    xtype: 'profiListe',

    title: 'LISTE DES PROFILS',

    reference: 'profilGridRef',

    requires: [

        'zonblewou.store.mesStore.Profil',

        'zonblewou.view.mesPages.parametre.profil.ProfilFormController'
    ],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: true
            //bind: '{usersResults}'
    }],

    controller: 'profilform',

    store: {
        type: 'profil'
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
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'id',
            text: 'Identifiant',
            hidden: true,
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            cls: 'content-column',
            dataIndex: 'profil',
            text: 'Profil',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            items: [{
                    xtype: 'button',
                    iconCls: 'x-fa fa-pencil',
                    tooltip: 'Modifier',

                    handler: 'onProfilEditAction'
                        /*

                                    //columns: [{ header: 'World' }], // One header just for show. There's no data,
                                    //store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
                                }
                            }).show();

                        }

                                */

                },
               /* {
                    xtype: 'button',

                    iconCls: 'x-fa fa-close',

                    tooltip: 'Supprimer',

                    handler: 'onProfilDeleteAction'

                }*/


            ],

            cls: 'content-column',
            width: 120,
            dataIndex: 'bool',
            text: 'Actions',
            tooltip: 'Actions '
        }
    ],

    //}]


    /*
    initComponent: function() {

        this.tbar = {
            reference: 'progress',
            defaultButtonUI: 'wizard-' + this.colorScheme,
            cls: 'wizardprogressbar',
            defaults: {
                //disabled: true,
                iconAlign: 'top'
            },
            layout: {
                pack: 'center'
            },
            items: [{
                    //step: 0,
                    iconCls: 'fa fa-plus',
                    pressed: true,
                    //enableToggle: true,
                    text: 'Ajouter'
                },
                {
                    //step: 1,
                    iconCls: 'fa fa-user',
                    //enableToggle: true,
                    text: 'Consulter',
                    itemIndex: 'consulter',

                    // listners
                    listeners: {
                        click: 'onTbarConsulterClick'
                    }
                }
                
                 {
                     step: 2,
                     iconCls: 'fa fa-home',
                     enableToggle: true,
                     text: 'Address'
                 },
                 {
                     step: 3,
                     iconCls: 'fa fa-heart',
                     enableToggle: true,
                     text: 'Finish'
                 }
                 
            ]
        };

        


        
        this.bbar = {
            reference: 'navigation-toolbar',
            margin: 8,
            items: [
                '->',
                {
                    text: 'Previous',
                    ui: this.colorScheme,
                    formBind: true,
                    bind: {
                        disabled: '{atBeginning}'
                    },
                    listeners: {
                        click: 'onPreviousClick'
                    }
                },
                {
                    text: 'Next',
                    ui: this.colorScheme,
                    formBind: true,
                    reference: 'nextbutton',
                    bind: {
                        disabled: '{atEnd}'
                    },
                    listeners: {
                        click: 'onNextClick'
                    }
                }
            ]
        };
        

        this.callParent();
    }
    */


});