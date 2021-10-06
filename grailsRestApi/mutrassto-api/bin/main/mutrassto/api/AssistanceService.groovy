package mutrassto.api

import grails.converters.JSON
import static java.lang.Class.forName
import grails.gorm.transactions.Transactional
import org.springframework.web.multipart.MultipartFile
import grails.web.servlet.mvc.GrailsParameterMap

import java.io.File
import java.io.FileOutputStream
import java.util.Base64

//import controllers.mutrassto.api.FeaturedImageCommand

@Transactional
class AssistanceService extends GenericService {

    //def serviceMethod() {

    //}
    def create(java.util.Map obj) {
        println (obj)

        //CREATION DU FICHIER
            this.uploadFile(obj)
    }

   def uploadFile(params){

       def fichier = params.acteDeces

       File destinationFichier = new File('C:/laragon/www/projet/grailsRestApi/mutrassto-api/src/main/webapp/pdf')

       fichier.tansferTo(destinationFichier)


    }

    //def update(){}

}