package mutrassto.api

class Adhesion  extends Cotisation {

    int nbRemboursement

    static hasMany = [subordinates: Cotisation]

    static constraints = {
        nbRemboursement min : 0, blank: false
    }

static mapping = {
version false

}

}
