package mutrassto.api


import grails.rest.*
import grails.converters.*

class CommandesLigneController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CommandesLigneController() {
        super(CommandesLigne)
    }
}
