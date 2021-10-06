package mutrassto.api


import grails.rest.*
import grails.converters.*
import static java.lang.Class.forName

class CommandeController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CommandeController() {
        super(Commande)
    }


    def enregistrerCommande(){

        println(params)

        println(params.donneesEnStringify['ligneCommande'])

        // ENREGISTREMENT DE LA COMMANDE
        //

        // création du package
        //
       def entity=forName('mutrassto.api.'+params.classe)

       // création d'une nvlle instance de commande
       //
        def commande = entity.newInstance(params)

        // enregistrement de la commande
        //
       commande.save()


        println('données en stringify ++++')
       println(params.donneesEnStringify['commande'])

        println('données en stringify ----')


        // CREATION DE LA LIGNE DE COMMANDE SI LA COMMANDE A ETE BIEN ENREGISTREE
        // RECUPERATION DES LIGNES DE COMMANDES
        //

        // CREATION DU PACKAGE DE LA LIGNE DE LA COMMANDE
        //
        def entityLigneCommande = forName('mutrassto.api.'+CommandesLigne)

        // CONSTITUTIION DE L'OBJET 
        def paramsLC = [:]
        paramsLC.siteLivraison = 1
        paramsLC.typeCredit = 1
        def ligneCommande = entityLigneCommande.newInstance(paramsLC)

        // LIAISON DE LA COMMANDE ET DE SA LIGNE
        //
        ligneCommande.commande = commande

        // ENREGISTREMENT DE LA LIGNE DE COMMANDE
        //
        ligneCommande.save()


    }

    //def index(){}
    //@override
    
}

