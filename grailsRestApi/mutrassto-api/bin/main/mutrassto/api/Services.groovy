package mutrassto.api

class Services {

    String services

    static belongsTo = [division:Division]

    static constraints = {
        services blank : false
    }

    static mapping = {
        version false
    }
}
