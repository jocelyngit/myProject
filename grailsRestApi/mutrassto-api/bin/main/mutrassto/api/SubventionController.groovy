package mutrassto.api


import grails.rest.*
import grails.converters.*

class SubventionController extends RestfulController {
    static responseFormats = ['json', 'xml']
    SubventionController() {
        super(Subvention)
    }
}
