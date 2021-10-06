package mutrassto.api


import grails.rest.*
import grails.converters.*

class LienParentController extends RestfulController {
    static responseFormats = ['json', 'xml']

      // DECLARATION
    def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def lienParentService

    LienParentController() {
        super(LienParent)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (lienParentService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (lienParentService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (lienParentService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
    
}
