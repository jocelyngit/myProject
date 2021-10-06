package mutrassto.api


import grails.rest.*
import grails.converters.*

class TypeOperationController extends RestfulController {
    static responseFormats = ['json', 'xml']

     def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def typeOperationService

    TypeOperationController() {
        super(TypeOperation)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (typeOperationService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (typeOperationService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (typeOperationService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }

    
}
