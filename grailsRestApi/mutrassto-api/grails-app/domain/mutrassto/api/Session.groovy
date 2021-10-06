package mutrassto.api

class Session  {

    //String libelleSession
    Date dateDebutSession

    static belongsTo = [etatEvenement:EtatEvenement]

    static constraints = {
        dateDebutSession blank : false
        //libelleSession maxSize : 255
    }


    static mapping = {
        version false
        autoTimestamp false
        dateDebutSession type: 'date'
        
    }
}
