Ext.define('zonblewou.view.mesPages.profil.ProfilGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.profilgridmodel',

    requires: [
        'zonblewou.model.mesModeles.Profil'
    ],

    stores: {
        profil: {
            model: 'zonblewou.model.mesModeles.Profil',
            autoLoad: true
        }
    },

    formulas: {

        currentProfil: {

            bind: '{profilGridRef.selection}',

            get: function(profil) {
                this.set('current.profil', profil);
                return profil;
            }
        }

    }
});