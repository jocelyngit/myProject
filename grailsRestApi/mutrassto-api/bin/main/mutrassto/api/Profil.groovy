package mutrassto.api

class Profil {

    String profil

    static constraints = {
        profil blank : false
    }

    static mapping = {
        version false
    }
}
