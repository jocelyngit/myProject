package mutrassto.api


import grails.rest.*
import grails.converters.*

class TypeCreditController extends RestfulController {
    static responseFormats = ['json', 'xml']

        // DECLARATION
    def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def typeCreditService

    TypeCreditController() {
        super(TypeCredit)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (typeCreditService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (typeCreditService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (typeCreditService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }

}
