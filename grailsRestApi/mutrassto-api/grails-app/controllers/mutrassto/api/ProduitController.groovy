package mutrassto.api


import grails.rest.*
import grails.converters.*

class ProduitController extends RestfulController {
    static responseFormats = ['json', 'xml']

    def p =params+request.JSON
    def produitService

     ProduitController() {
        super(Produit)
    }
     def findAll(){
        println('Toto')
        render params.callback+'('+ (produitService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (produitService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (produitService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
   
}
