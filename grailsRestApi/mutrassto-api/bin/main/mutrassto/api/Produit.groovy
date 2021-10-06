package mutrassto.api

class Produit {

    String designation
    Date dateEnreg = new Date();

    static belongsTo = [categorie:Categorie,session:Session,fournisseur:Fournisseur]

    static constraints = {
        designation blank:false
      
    }

    static mapping = {
        version false
        autoTimestamp false
        dateEnreg type :'date'
    }
}
