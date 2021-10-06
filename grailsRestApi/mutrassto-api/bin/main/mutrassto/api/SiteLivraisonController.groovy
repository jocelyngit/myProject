package mutrassto.api


import grails.rest.*
import grails.converters.*

class SiteLivraisonController extends RestfulController {
    static responseFormats = ['json', 'xml']

      // DECLARATION
    def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def siteLivraisonService

     SiteLivraisonController() {
        super(SiteLivraison)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (siteLivraisonService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (siteLivraisonService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (siteLivraisonService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }

   
}
