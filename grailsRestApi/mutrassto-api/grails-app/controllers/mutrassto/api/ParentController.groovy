package mutrassto.api


import grails.rest.*
import grails.converters.*

class ParentController extends RestfulController {
    static responseFormats = ['json', 'xml']

      def p =params+request.JSON

        def parentService


    ParentController() {
        super(Parent)
    }
     def findAll(){
        println('Toto')
        render params.callback+'('+ (parentService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (parentService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (parentService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }

}
