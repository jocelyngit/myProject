package mutrassto.api


import grails.rest.*
import grails.converters.*

class FournisseurController extends RestfulController {
    static responseFormats = ['json', 'xml']

     def p =params+request.JSON
    def fournisseurService

     FournisseurController() {
        super(Fournisseur)
    }

     def findAll(){
        println('Toto')
        render params.callback+'('+ (fournisseurService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (fournisseurService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (fournisseurService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
    
}
