package mutrassto.api

import grails.gorm.transactions.Transactional

@Transactional
class ParentService extends GenericService {

   // def serviceMethod() {

    //}

    def findAll(String clas){
       
       def reponse = Parent.executeQuery("select distinct p.id, p.nomPrenomParent, p.adressParent, m.nomPrenomMembre, lp.lienParent "+
       
                                        "from Parent p, Membre m, LienParent lp "+
                                        
                                        "where p.membre.id = m.id and p.lienParent.id = lp.id ")

    return reponse
    
    }

    


}
