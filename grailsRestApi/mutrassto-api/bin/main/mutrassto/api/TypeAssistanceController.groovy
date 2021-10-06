package mutrassto.api


import grails.rest.*
import grails.converters.*

class TypeAssistanceController extends RestfulController {
    static responseFormats = ['json', 'xml']


         // DECLARATION
    def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def typeAssistanceService

    TypeAssistanceController() {
        super(TypeAssistance)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (typeAssistanceService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (typeAssistanceService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (typeAssistanceService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
    
}
