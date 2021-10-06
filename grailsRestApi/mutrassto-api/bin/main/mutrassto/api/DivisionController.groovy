package mutrassto.api


import grails.rest.*
import grails.converters.*

class DivisionController extends RestfulController {
    static responseFormats = ['json', 'xml']

    def p =params+request.JSON
    def divisionService

   
    DivisionController() {
        super(Division)
    }

     def findAll(){
        println('Toto')
        render params.callback+'('+ (divisionService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (divisionService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (divisionService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }

}
