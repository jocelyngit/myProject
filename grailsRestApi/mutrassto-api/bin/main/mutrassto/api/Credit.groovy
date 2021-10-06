package mutrassto.api

class Credit {

Date dateCredit = new Date()
Integer nbRemboursement
Date moisDebutRemboursement

static hasMany = [ligneRemboursement:LigneRemboursement,commandesLigne:CommandesLigne]

static constraint = {
nbRemboursement blank: false, min : 0F
moisDebutRemboursement blank: false
dateCredit min: new Date()

}

static mapping = {
version false
dateCredit type : 'date'

}

}
