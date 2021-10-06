package mutrassto.api

class Division {

    String division

    static hasMany = [services:Services]

    static constraints = {
        division blank : false
    }

    static mapping = {
        version false
    }
}
