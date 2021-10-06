package mutrassto.api

class CommandesLigne {
 
    int quantite

    static belongsTo = [produit:Produit,typeCredit:TypeCredit,siteLivraison:SiteLivraison,commande:Commande]

    static constraints = {
        quantite min : 0
    }
    static mapping = {
        version false
    }
}
