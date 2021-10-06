package mutrassto.api


import grails.rest.*
import grails.converters.*

class ModePaiementController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ModePaiementController() {
        super(ModePaiement)
    }
}
