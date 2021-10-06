package mutrassto.api

class Membre {

    String nomPrenomMembre
    Date    dateNaissance
    String profession   
    String login
    String password
    String email


    static belongsTo = [profil:Profil,situationMatrimoniale:SituationMatrimoniale,services:Services]

    static hasMany = [parent: Parent,assistance:Assistance,cotisation:Cotisation]

    static constraints = {
        nomPrenomMembre blank:false, nullable: false
        profession blank:false
        login size : 1..20, blank: false, unique : true
        password blank: false
        email email: true, blank: false
        dateNaissance max : new Date()
    }

    static mapping = {
        version false
        autoTimestamp false
        dateNaissance type: 'date'
    }

}
