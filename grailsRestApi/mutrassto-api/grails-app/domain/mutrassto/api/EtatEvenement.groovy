package mutrassto.api

class EtatEvenement {

    String etatEvenement

    static constraints = {
        etatEvenement blank : false
    }

    static mapping = {
        version false
    }
}
