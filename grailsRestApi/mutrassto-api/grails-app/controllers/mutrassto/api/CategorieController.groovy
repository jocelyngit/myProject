package mutrassto.api


import grails.rest.*
import grails.converters.*

class CategorieController extends RestfulController {
    static responseFormats = ['json', 'xml']
    
    def p1 =params+request.JSON
    def p =params
    def categorieService

    CategorieController() {
        super(Categorie)
    }

     def findAll(){
        println('Toto')
        render params.callback+'('+ (categorieService.findAll(params.classe) as JSON) +')'
        //render (CategorieProduitService.findAll((p).classe) as JSON) 
    }

    def update(){


        render params.callback+'('+ (categorieService.update(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.update((p).classe) as JSON) 
    }

    def create(){

        println('Bonjour depuis controller')
        println(p)
        println('===========================')
        println(p1)
        println("++++++++++++++++++++++++++")

       render params.callback+'('+ (categorieService.create(params+request.JSON) as JSON) +')'

        //render (CategorieProduitService.create((p).classe) as JSON) 
    }

     def index(){
         render params as JSON
     }
}
