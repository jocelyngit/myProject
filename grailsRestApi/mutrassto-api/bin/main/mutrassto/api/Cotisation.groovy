package mutrassto.api

class Cotisation {

    double montant
    Date dateCotisation
    String periode

    static hasOne = [operation:Operation]

    static belongsTo = [membre:Membre,modePaiement:ModePaiement]

    static constraints = {
        montant min : 0, scale: 2, blank : false
        dateCotisation min: new Date(), blank : false
        periode blank : false
        
    }

    static mapping = {
        version false
        tablePerHierarchy false
    }
}
