package mutrassto.api

class TypeOperation {

    String typeOperation

    static constraints = {
        typeOperation blank : false
    }

    static mapping = {
        version false
    }
}
