package mutrassto.api


import grails.rest.*
import grails.converters.*
import org.springframework.web.multipart.MultipartFile
import static java.lang.Class.forName

class AssistanceController extends RestfulController {
    static responseFormats = ['json', 'xml']

    def assistanceService

    AssistanceController() {
        super(Assistance)
    }

    
    def create() {

        render params.callback+'('+ (assistanceService.create(params+request.JSON) as JSON) +')'
       }

        

            // CREATION DU FICHIER
            //def acteDecesFichier = entityInstance.acteDeces
            // CREATION DU FICHIER

            
            //if (!acteDecesFichier.isEmpty()) {
               // entityInstance.acteDeces = this.uploadFile(acteDecesFichier, "${entityInstance.acteDeces}", "acteDecesFichier")
            
            
            }

            //flash.message = "${message(code: 'default.created.message', args: [message(code: 'user.label', default: 'User'), userInstance.id])}"
            //redirect(action: "show", id: userInstance.id)

        
    
