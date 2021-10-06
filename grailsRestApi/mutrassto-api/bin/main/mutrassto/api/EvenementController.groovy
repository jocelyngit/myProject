package mutrassto.api


import grails.rest.*
import grails.converters.*

class EvenementController extends RestfulController {
    static responseFormats = ['json', 'xml']
    EvenementController() {
        super(Evenement)
    }
}
