package mutrassto.api

import grails.gorm.transactions.Transactional

@Transactional
class SessionService extends GenericService {

    /*def serviceMethod() {

    }*/

      def findAll(String clas){

       def c = Session.executeQuery("select distinct s.id, s.dateDebutSession, et.etatEvenement"+
                                    " from Session s, EtatEvenement et "+
                                    "where s.etatEvenement.id = et.id")

     //c['dateDebutSession'] = Date.parse("YYYY-mm-dd", c['dateDebutSession'])

     println (c)

     return c
      
      }

      // METHODE vERIFIER UNE SESSION EN COURS

      def sessionEnCours(){

         def v1 = (long)2 

        def c = Session.executeQuery('SELECT DISTINCT s.id from Session s, EtatEvenement et '+

                  'WHERE s.etatEvenement.id =:v ', [v : v1])
                

            if (c!=[]){
              return ['success':true, 'text':c[0]]
            }else{
              return ['success':false, 'msg':'AUCUNE SESSION ENCOURS POUR LE MOMENT']
            }
      }


      def create(java.util.Map obj) {
        println('PARAMETRES !!!!!!!!!!!!!--- ')
        println('BONJOUR LE MONDE')
        println(obj)
        println('BONJOUR LA TERRE')

                def entity=forName('mutrassto.api.'+obj.classe)
        def entityInstance = entity.newInstance(obj)
        println('XXXXXXXXXXXXXXXXXXXXXXXXX '+obj)

        if(entityInstance.save(flush: true,failOnError:true)){
        println('CREATION !!!!!!!!!!!!!!!!!!!!!! BF  LAST')
        return ['success':true, 'msg':'Enregistrement &eacuteffectu&eacute avec succ&egraves']
        }else{
           entityInstance.errors.allErrors.each {
                println it
            }
           return ['success':false, 'msg':it]
       }
        
    }

    def sessionPasEnCours(String clas){

        def C = Session.executeQuery("select distinct s.id, s.dateDebutSession "+
        
                                      "from Session s, EtatEvenement et "+
                                      
                                      "where s.etatEvenement.id =: val",[val:1])

                  println(c)

                  return c

      }







}
