package mutrassto.api


import grails.rest.*
import grails.converters.*

class CreditController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CreditController() {
        super(Credit)
    }
}
