package mutrassto.api

import grails.gorm.transactions.Transactional

@Transactional
class CommandeService extends GenericService {

    //def serviceMethod() {

    //}

    def enregistrerCommande(java.util.Map obj){

        // ENREGISTREMENT DE LA COMMANDE DABORD

    }


    /* def create(java.util.Map obj) {
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
        
    }*/

    
}
