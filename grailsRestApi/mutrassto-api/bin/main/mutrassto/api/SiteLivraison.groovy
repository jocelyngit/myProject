package mutrassto.api

class SiteLivraison {

     String siteLivraison

    static constraints = {
        siteLivraison blank : false
    }

    static mapping = {
        version false
    }
}
