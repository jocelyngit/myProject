Ext.define('zonblewou.view.mesPages.profil.ProfilFormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.profilfmodel',

    data: {
        current: {
            profil: null,
            editMode: 'Edit'
                //currentView: null

        }
    },

    formulas: {
        profilStatus: {
            bind: {
                bindTo: '{current.profil}'
            },

            get: function(profil) {

                return profil;
            }
        }

    }
});