package mutrassto.api


import grails.rest.*
import grails.converters.*

class UserConnexionController {
	static responseFormats = ['json', 'xml']

    def p = params+request.JSON

    // INJECTION DE PROFILSERVICE
    def userConnexionService
	
    //def index() { }

    def seConnecter(){

        render params.callback+'('+ (userConnexionService.seConnecter(params+request.JSON) as JSON) +')'

    }

}
