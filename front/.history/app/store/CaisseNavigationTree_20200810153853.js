Ext.define('zonblewou.store.CaisseNavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'CaisseNavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [

            //dashboard
            /*
             {
                 text: 'Dashboard',
                 iconCls: 'x-fa fa-desktop',
                 rowCls: 'nav-tree-badge nav-tree-badge-new',
                 viewType: 'admindashboard',
                 routeId: 'dashboard', // routeId defaults to viewType
                 leaf: true
             },
             */

            // accueil
            {
                text: 'Accueil',
                iconCls: 'x-fa fa-desktop',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                //viewType: 'accueil',
                routeId: 'accueil', // routeId defaults to viewType
                leaf: true
            },

            /*
            {
                text: 'Email',
                iconCls: 'x-fa fa-send',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'email',
                leaf: true
            },
            */

            /*
              {
                 text: 'Profile',
                 iconCls: 'x-fa fa-users',
                 viewType: 'profile',
                 leaf: true
             },
            */

            // membres
            /*
               {
                text: 'Membres',
                iconCls: 'x-fa fa-user',
                viewType: 'membre',
                leaf: true
            },
            */


            // comptes

            {
                text: 'Comptes',
                iconCls: 'x-fa fa-balance-scale',
                //viewType: 'comptes',
                leaf: true
            },


            // Cotisation
            /*
            {

                text: 'Cotisations',
                //iconCls: 'x-fa fa-flask',
                viewType: 'cotisation',
                leaf: true
            },
            */


            // operation
            {
                text: 'Opérations',
                iconCls: 'x-fa fa-exchange',
                //viewType: 'operations',
                leaf: true
            },

            // credit
            /* {
                 text: 'Crédits',
                 iconCls: 'x-fa fa-money-bill',
                 viewType: 'credit',
                 leaf: true
             },
             */
            /*
              INFO & Statistique
            */

            // Etats ou reports
            {
                text: 'Etats',
                //iconCls: 'x-fa fa-print',newspaper-o
                iconCls: 'x-fa fa-newspaper-o',
                viewType: 'etat',
                leaf: true
            },
            /*
              {
                text: 'Statistiques',
                iconCls: 'x-fa fa-bar-chart',
                viewType: 'page404',
                leaf: true
            },
            */
            // setting parametre
            /*
              {
                text: 'Paramètres',
                iconCls: 'x-fa fa-cog',
                viewType: 'parametre',
                leaf: true
            },
            */
            /*
            {
                text: 'Search results',
                iconCls: 'x-fa fa-search',
                viewType: 'searchresults',
                leaf: true
            },
            */

            /*
            {
                text: 'FAQ',
                iconCls: 'x-fa fa-question',
                viewType: 'faq',
                leaf: true
            },
            {
                text: 'Pages',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [{
                        text: 'Blank Page',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '404 Error',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
                    {
                        text: '500 Error',
                        iconCls: 'x-fa fa-times-circle',
                        viewType: 'page500',
                        leaf: true
                    },
                    {
                        text: 'Lock Screen',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'lockscreen',
                        leaf: true
                    },

                    {
                        text: 'Login',
                        iconCls: 'x-fa fa-check',
                        viewType: 'login',
                        leaf: true
                    },
                    {
                        text: 'Register',
                        iconCls: 'x-fa fa-pencil-square-o',
                        viewType: 'register',
                        leaf: true
                    },
                    {
                        text: 'Password Reset',
                        iconCls: 'x-fa fa-lightbulb-o',
                        viewType: 'passwordreset',
                        leaf: true
                    }
                ]
            },
            
            {
                text: 'Widgets',
                iconCls: 'x-fa fa-flask',
                viewType: 'widgets',
                leaf: true
            },
            */


            /*
            {
                text: 'Forms',
                iconCls: 'x-fa fa-edit',
                viewType: 'forms',
                leaf: true
            },
            */


            /*
             {
                 text: 'Charts',
                 iconCls: 'x-fa fa-pie-chart',
                 viewType: 'charts',
                 leaf: true
             }
             */
        ]
    }
});