package mutrassto.api

class LigneRemboursement {

Date periode
Date dateEcheance = new Date()
double montantEcheance

static belongsTo = [credit:Credit]

static constraint = {
montantEcheance blank: false, min : 0F, scale : 2
dateEcheance min: new Date(), blank : false
periode blank : false

}

static mapping = {
version false
dateEcheance type : 'date'
}

}
