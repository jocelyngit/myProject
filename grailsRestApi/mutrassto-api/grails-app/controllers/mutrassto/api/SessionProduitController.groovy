package mutrassto.api


import grails.rest.*
import grails.converters.*

class SessionProduitController extends RestfulController {
    static responseFormats = ['json', 'xml']

    
    def p =params+request.JSON
    def sessionProduitService

      SessionProduitController() {
        super(SessionProduit)
    }

     def findAll(){
        println('Toto')
        render params.callback+'('+ (sessionProduitService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (sessionProduitService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (sessionProduitService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
   
}
