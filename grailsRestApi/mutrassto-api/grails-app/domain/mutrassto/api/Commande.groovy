package mutrassto.api

//java.util.Date.parse 

class Commande {

    Date dateCommande =  new Date()
    //Membre Membre
    //List commandeLignes
    //static hasMany = [commandesLigne:CommandesLigne]
    //static mappedBy = [commandesLigne: "commande"]
    static belongsTo = [membre:Membre,traitement:Traitement]
    
    static constraints = {
        dateCommande min: new Date()
    }

    static mapping = {
        version false
        dateCommande type: 'date'
        //membre type: "bigint", length: 6
    }

}
