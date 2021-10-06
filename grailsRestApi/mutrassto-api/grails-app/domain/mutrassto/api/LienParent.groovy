package mutrassto.api

class LienParent {

    String lienParent

    static constraints = {
        lienParent blank : false
    }

    static mapping = {
        version false
    }
}
