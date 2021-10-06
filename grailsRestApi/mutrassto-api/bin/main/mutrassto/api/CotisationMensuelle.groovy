package mutrassto.api

class CotisationMensuelle extends Cotisation {

static hasMany = [subordinates: Cotisation]

    static constraints = {
    }

static mapping = {
version false

}

}
