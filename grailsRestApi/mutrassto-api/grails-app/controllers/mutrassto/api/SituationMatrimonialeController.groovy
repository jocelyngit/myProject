package mutrassto.api


import grails.rest.*
import grails.converters.*

class SituationMatrimonialeController extends RestfulController {
    static responseFormats = ['json', 'xml']

      // DECLARATION
    def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def situationMatrimonialeService

    SituationMatrimonialeController() {
        super(SituationMatrimoniale)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (situationMatrimonialeService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (situationMatrimonialeService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (situationMatrimonialeService.create(params+request.JSON) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }

}
