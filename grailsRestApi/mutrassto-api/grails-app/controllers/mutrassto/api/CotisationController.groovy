package mutrassto.api


import grails.rest.*
import grails.converters.*

class CotisationController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CotisationController() {
        super(Cotisation)
    }
}
