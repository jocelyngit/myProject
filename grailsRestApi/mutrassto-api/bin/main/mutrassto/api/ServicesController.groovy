package mutrassto.api


import grails.rest.*
import grails.converters.*

class ServicesController extends RestfulController {
    static responseFormats = ['json', 'xml']

      // DECLARATION
    def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def servicesService

    ServicesController() {
        super(Services)
    }

    
     def findAll(){
        println('Toto')
        render params.callback+'('+ (servicesService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (servicesService.update(params) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){
        
        render params.callback+'('+ (servicesService.create(params) as JSON) +')'
        //render (CategorieProduitService.create((p).classe) as JSON) 
    }
}
