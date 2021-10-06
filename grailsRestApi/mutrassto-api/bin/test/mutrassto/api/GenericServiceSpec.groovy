package mutrassto.api

import grails.testing.services.ServiceUnitTest
import spock.lang.Specification

class GenericServiceSpec extends Specification implements ServiceUnitTest<GenericService>{

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
