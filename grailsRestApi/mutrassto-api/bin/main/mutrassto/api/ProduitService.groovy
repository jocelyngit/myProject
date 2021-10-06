package mutrassto.api

import grails.gorm.transactions.Transactional

@Transactional
class ProduitService extends GenericService {

    //def serviceMethod() {

    //}

      def findAll(String clas){
        //def classe=forName('mutrassto.api.'+clas)

       def c = Produit.executeQuery("select distinct p.id, p.designation, c.libelleCategorie, s.dateDebutSession, p.dateEnreg, f.raisonSociale  "+
       
                                       "from Produit p, Categorie c, Session s, Fournisseur f  "+
                                       "where p.categorie.id = c.id and p.session.id = s.id and p.fournisseur.id = f.id")

      
    return c 
      }
}
