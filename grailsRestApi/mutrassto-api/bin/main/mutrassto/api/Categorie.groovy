package mutrassto.api

class Categorie {

    String libelleCategorie
    
    static constraints = {
        libelleCategorie blank:false
        // dateEnreg()
    }

    static mapping = {
        version false
    }
}
