package mutrassto.api

class TypeCredit {

     String typeCredit

    static constraints = {
        typeCredit blank : false
    }

    static mapping = {
        version false
    }
}
