package mutrassto.api

class SituationMatrimoniale {

    String situationMatrimoniale

    static constraints = {
        situationMatrimoniale blank : false
    }

    static mapping = {
        version false
    }
}
