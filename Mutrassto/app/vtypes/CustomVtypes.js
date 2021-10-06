// custom Vtype for vtype:'customPass'
//var passRegex = ((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20});
Ext.apply('MutrasstoApp.vtypes.CustomVTypes', {
    //  vtype validation function
    override: 'Ext.form.field.VTypes',
    customPass: function(val, field) {
        return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
    },
    // vtype Text property: The error text to display when the validation function returns false
    customPassText: 'Not a valid password.  Length must be at least 6 characters and maximum of 20Password must contain one digit, one letter lowercase, one letter uppercase, onse special symbol @#$% and between 6 and 20 characters.',

    // RENSEIGNER LA QUANTITE SI LIGNE SELECTIONNE LIGNE

    renseignerSaLigne: function(val, field) {

        return /!=0/.test(val)

    }

});