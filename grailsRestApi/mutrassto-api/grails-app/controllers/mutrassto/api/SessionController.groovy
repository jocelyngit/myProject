package mutrassto.api


import grails.rest.*
import grails.converters.*

class SessionController extends RestfulController {
    static responseFormats = ['json', 'xml']

    def p = params+request.JSON;
    def sessionService
    SessionController() {
        super(Session)
    }
    def findAll(){
        /*console('*****')
        console(params)
        console('*****')
        console(request)*/

        render params.callback+'('+ (sessionService.findAll(params.classe) as JSON) +')'
        //render (sessionService.findAll((p).classe) as JSON) 
    }

    def update(){
        //render (sessionService.update((p).classe) as JSON) 

        render params.callback+'('+ (sessionService.update(params+request.JSON) as JSON) +')'
    }

    def create(){
        //render (sessionService.create((p).classe) as JSON) 

        render params.callback+'('+ (sessionService.create(params+request.JSON) as JSON) +')'
    }

    def sessionEnCours(){

         render params.callback+'('+ (sessionService.sessionEnCours() as JSON) +')'
    }

    def sessionPasEnCours(){

         render params.callback+'('+ (sessionService.sessionPasEnCours(params.class) as JSON) +')'
    }

}
