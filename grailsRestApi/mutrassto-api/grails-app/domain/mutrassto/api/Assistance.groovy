package mutrassto.api

class Assistance {

String acteDeces
//byte[] acteDecesBytes

String acteNaissance
//byte[] acteNaissanceBytes

String actEtatCivil
//byte[] actEtatCivilBytes

String lieuSurvenu
String lieuEnterrement
Date 	dateSurveue
Date 	dateEnterrement
Date 	dateEnregAssistance = new Date()

static belongsTo = [typeAssistance: TypeAssistance,membre:Membre,traitement:Traitement,etatDemande:EtatDemande]

static constraint = {
acteDeces   blank: true
acteNaissance nullable : true, blank: true
actEtatCivil  nullable : true, blank: true
lieuSurvenu   blank: true
lieuEnterrement blank: true
dateSurveue  max: new Date(), blank: true
dateEnregAssistance min: new Date(), blank: true
dateEnterrement min: new Date(), blank: true

//acteDecesBytes blank: true, maxSize:1073741824

//acteNaissanceBytes blank: true, nullable:true, maxSize:1073741824

//actEtatCivilBytes blank: true, nullable:true, maxSize:1073741824


}

static mapping = {
version false
dateSurveue type : 'date'
dateEnterrement type : 'date'
dateEnregAssistance type : 'date'

//acteDecesBytes column: 'actes_deces_bytes', sqlType: 'longblob'

//acteNaissanceBytes column: 'actes_naissance_bytes', sqlType: 'longblob'

//actEtatCivilBytes column: 'actes_etatcivil_bytes', sqlType: 'longblob'


}

}
