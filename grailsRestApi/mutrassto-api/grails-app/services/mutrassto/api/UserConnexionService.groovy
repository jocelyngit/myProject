package mutrassto.api

import grails.converters.JSON
import grails.gorm.transactions.Transactional
import static java.lang.Class.forName

@Transactional
class UserConnexionService {

    //def serviceMethod() {

    //}

    def seConnecter(java.util.Map obj){

        // DECLARATION DE LA CLASSE
        //def class=forName('mutrassto.api.'+classe)
        // Pouvoir recuperer valeur du map

        def log = obj.login

        def pass = obj.password

        println ('paaaaaaaaaaaaaaaaaaaaaaaaaaaaass')
        println (pass)
        println ('paaaaaaaaaaaaaaaaaaaaaaaaaaaaass')

        def t = Membre.executeQuery("select m.password from Membre m " +
                                    " where m.login =:login", [login:log])

                
                if (t != []){

                    if (pass == t[0]){
                        println('Login trouvé')

                        def info = Membre.executeQuery("select m.id, p.profil from Membre m, Profil p " +
                                                        " where m.login =:login and m.profil.id = p.id", [login:log])

                     
                 

                        return ['success':true, 'info':info[0]]

                    }else{
                      
                        return ['success':false, 'msg':'Mot de passe ou login incorrect']
                    }
                
        }else{
         
            return ['success':false, 'msg':'login incorrect']
        }

        }

 
}
