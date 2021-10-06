package mutrassto.api

import grails.gorm.transactions.Transactional

@Transactional
class SessionProduitService extends GenericService {

   // def serviceMethod() {

    //}

      def findAll(String clas){
        //def classe=forName('mutrassto.api.'+clas)

       def c = SessionProduit.executeQuery("select distinct s.dateDebutSession, p.designation, sp.prix "+
                                          "from Session s, Produit p, SessionProduit sp "+
                                          "where sp.session.id = s.id and sp.produit.id = p.id" )

    
      return c 
     

      }

      //def prixProduit(String clas){

       //  def prixProduit = SessionProduit.executeQuery("select ")
      //}


}
