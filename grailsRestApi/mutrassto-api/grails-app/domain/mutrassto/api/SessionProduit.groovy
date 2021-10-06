package mutrassto.api

class SessionProduit implements Serializable {

    double prix

    static belongsTo = [produit:Produit,session:Session]

    static constraints = {
       prix blank : false, nullable : false
    }

    static mapping = {
        version false
        id composite : ['produit', 'session']
    }
}
