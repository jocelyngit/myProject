package mutrassto.api

import grails.gorm.transactions.Transactional

@Transactional
class ServicesService extends GenericService {

    //def serviceMethod() {

    //}

    
   def findAll(String clas){
        //def classe=forName('mutrassto.api.'+clas)

       def c = Services.executeQuery("select distinct s.id, s.services, d.division "+
       
                                    "from Division d, Services s "+
                                    "where s.division.id = d.id" )


    return c 
      }
}
