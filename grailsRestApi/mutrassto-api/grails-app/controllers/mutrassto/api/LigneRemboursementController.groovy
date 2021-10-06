package mutrassto.api


import grails.rest.*
import grails.converters.*

class LigneRemboursementController extends RestfulController {
    static responseFormats = ['json', 'xml']
    LigneRemboursementController() {
        super(LigneRemboursement)
    }
}
