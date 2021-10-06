package mutrassto.api


import grails.rest.*
import grails.converters.*

class MembreController extends RestfulController {
    static responseFormats = ['json', 'xml']

    def p =params+request.JSON
    def membreService

     MembreController() {
        super(Membre)
    }

     def findAll(){
        println('Toto')
        render params.callback+'('+ (membreService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (membreService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (membreService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
    
}
