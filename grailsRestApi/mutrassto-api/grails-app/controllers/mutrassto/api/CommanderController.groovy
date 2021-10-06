package mutrassto.api


import groovy.sql.Sql
import grails.rest.*
import grails.converters.*

class CommanderController {
	static responseFormats = ['json', 'xml']
	
   // def index() { }

    def dataSource // the Spring-Bean "dataSource" is auto-injected

    def list = {
        def db = new Sql(dataSource) // Create a new instance of groovy.sql.Sql with the DB of the Grails app

        def result = db.rows("SELECT * FROM viewCommande") // Perform the query

        //return [ 'result': result ] as JSON// return the results as model

        render params.callback+'('+ (result as JSON) +')'

          return result
    }
}
