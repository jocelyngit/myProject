package mutrassto.api


import grails.rest.*
import grails.converters.*

class ProfilController extends RestfulController {
    static responseFormats = ['json', 'xml']

    // DECLARATION
    def p =params+request.JSON

    // INJECTION DE PROFILSERVICE
    def profilService

    ProfilController() {
        super(Profil)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (profilService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (profilService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (profilService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
}
