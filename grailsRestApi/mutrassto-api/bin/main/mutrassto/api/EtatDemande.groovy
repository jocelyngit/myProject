package mutrassto.api

class EtatDemande {

    String etatDemande

    static constraints = {
        etatDemande blank : false
    }

    static mapping = {
        version false
    }
}
