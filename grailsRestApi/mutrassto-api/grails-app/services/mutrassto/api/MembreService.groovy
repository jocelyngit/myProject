package mutrassto.api

import grails.gorm.transactions.Transactional

@Transactional
class MembreService extends GenericService {

    //def serviceMethod() {

    //}

    def findAll(String clas){
        //def classe=forName('mutrassto.api.'+clas)

       def c = Membre.executeQuery("select distinct m.id, m.nomPrenomMembre, m.profession,s.services, m.email, p.profil, sm.situationMatrimoniale "+
                                    " from Membre m, Services s, Profil p, SituationMatrimoniale sm "+
                                    "where m.services.id = s.id and m.profil.id = p.id and m.situationMatrimoniale.id = sm.id")

    return c 

      }

}
