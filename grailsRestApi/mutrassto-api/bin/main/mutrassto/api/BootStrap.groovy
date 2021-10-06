package mutrassto.api

class BootStrap {

    def init = { servletContext ->


   //def etatEvenement1 = new EtatEvenement(etatEvenement:'NON DEMARRE').save()
   //def etatEvenement2 = new EtatEvenement(etatEvenement:'Encours').save()
   // def etatEvenement3 = new EtatEvenement(etatEvenement:'Cloture').save()
   //def session1 = new Session(libelleSession:'SESSION DE NOVEMBRE',dateSession:'2019-11-10',etatEvenement:etatEvenement1).save()
  

   //def situationMatrimoniale1 = new SituationMatrimoniale(situationMatrimoniale:'CELIBATAIRE').save()
   //def situationMatrimoniale2 = new SituationMatrimoniale(situationMatrimoniale:'MARIE').save()


    //def profil1 = new Profil(profil:'SECRETAIRE').save()
    //def profil2 = new Profil(profil:'SECRETAIRE ADJOINT').save()
    //def profil3 = new Profil(profil:'TRESORIER(E)').save()
    //def profil4 = new Profil(profil:'TRESORIER(E) ADJOINT').save()
   //def profil5 = new Profil(profil:'PRESIDENT').save()
    //def profil6 = new Profil(profil:'VICE-PRESIDENT').save()
   
    //def profil7 = new Profil(profil:'MEMBRE').save()
   //def situationMatrimoniale3 = new SituationMatrimoniale(situationMatrimoniale:'MARIE').save()
    //def services5 = new Services(services:'RECOUVREMENT3').save()
    //  def division4 = new Division(division:'DIVISION3',services:services5).save()

   // def membre1 = new Membre(matricule:'KOKO-MATRI0000001',nomMembre:'KOFFI',prenomMembre:'Kodjo',dateNaissance:'1985-06-06',profession:'INFORMATICIEN',login:'yo',password:'JOSPUNTO',email:'kkodjo@gmail.com',profil:profil7,situationMatrimoniale:situationMatrimoniale3,division:division4).save()
  
   // def etatEvenement1 = new EtatEvenement(etatEvenement:'Non demarre ').save()
   //def etatEvenement2 = new EtatEvenement(etatEvenement:'Encours').save()
   // def etatEvenement3 = new EtatEvenement(etatEvenement:'Cloture').save()

   //def services1 = new Services(services:'INFORMATIQUE').save()
   //def services2 = new Services(services:'COTISATION').save()
   //def services3 = new Services(services:'RECOUVREMENT').save()
   //def services4 = new Services(services:'RECOUVREMENT2').save()


   //def division1 = new Division(division:'DIVISION CONCEPTION')
                       // division1.addToServices(services3)
                       // division1.save()
   //def division2 = new Division(division:'DIVISION DEVELOPPEMENT',services:services4).save()
   //def division3 = new Division(division:'GESTION DE COMPTES COTISANTS',services:services2).save()



   // def typeCredit1 = new TypeCredit(typeCredit:'NATURE').save()
   // def typeCredit2 = new TypeCredit(typeCredit:'ESPECE').save()


   // def siteLivraison1 = new SiteLivraison(siteLivraison:'SIEGE SOCIAL').save()
   // def siteLivraison2 = new SiteLivraison(siteLivraison:'AGENCE').save()


   // def lienParent1 = new LienParent(lienParent:'PERE').save()
   // def lienParent2 = new LienParent(lienParent:'MERE').save()
   // def lienParent3 = new LienParent(lienParent:'ONCLE').save()
   // def lienParent4 = new LienParent(lienParent:'TANTE').save()
   // def lienParent5 = new LienParent(lienParent:'FRERE').save()
   // def lienParent6 = new LienParent(lienParent:'SOEUR').save()


    //def typeOperation1 = new TypeOperation(typeOperation:'ENTREE').save()
    //def typeOperation2 = new TypeOperation(typeOperation:'SORTIE').save()
    
    
    //def etatDemande1 = new EtatDemande(etatDemande:'Non delibere').save()
    //def etatDemande2 = new EtatDemande(etatDemande:'Valide').save()
    //def etatDemande3 = new EtatDemande(etatDemande:'Rejette').save()

   //def produitCategorie1 = new Categorie(libelleCategorie:'Riz non parfume').save()
    //def produitCategorie2 = new Categorie(libelleCategorie:'Savon').save()
    //def produitCategorie3 = new Categorie(libelleCategorie:'Riz Parfume').save()
    //def produitCategorie4 = new Categorie(libelleCategorie:'Pates alimentaires').save()
    //def produitCategorie5 = new Categorie(libelleCategorie:'Chaises en plastique').save()

    //def session1 = new Session(libelleSession:'session de Octobre',dateSession:new Date(2019-10-10),etatEvenement:etatEvenement1).save()
   // def session2 = new Session(libelleSession:'session de Novembre',dateSession:new Date( 2019-11-11),etatEvenement:etatEvenement1).save()
   // def session3 = new Session(libelleSession:'session de Septembre',dateSession:new Date( 2019-09-20),etatEvenement:etatEvenement1).save()


    //def produitCategorie5 = new Categorie(libelleCategorie:'Fortune').save()

    //def fournisseur2 = new Fournisseur (nomFournisseur:'GATO',prenomFournisseur:'Fils frere',emailFournisseur:'gatofils@gmail.com',telFournisseur:'96989795',adressFournisseur:'Rue kodome cassamblanca').save()

    //def produit1 = new Produit(designation:'Fortune 25Kg',dateEnreg:new Date(),categorie:produitCategorie5,session:session1,fournisseur:fournisseur2).save()
    //def produit2 = new Produit(designation:'Fortune 50Kg',dateEnreg:new Date(),categorie:produitCategorie5,session:session1,fournisseur:fournisseur2).save()
    //def produit3 = new Produit(designation:'Fortune 75Kg',dateEnreg:new Date(),categorie:produitCategorie5,session:session1,fournisseur:fournisseur2).save()
   
   
   // def produit2 = new Produit(nomProduit:'Farida 25Kg',dateEnreg:new Date(),prix:18000,codeProduit:'farida25',categorie:produitCategorie1,session:session).save()
  //  def produit3 = new Produit(nomProduit:'Majesté jaune 50Kg',dateEnreg:new Date(),prix:14000,codeProduit:'majesteJaune50',categorie:produitCategorie1,session:session).save()
  //  def produit4 = new Produit(nomProduit:'Tilemsi bleu 50Kg',dateEnreg:new Date(),prix:17000,codeProduit:'tilemsiBleu50',categorie:produitCategorie1,session:session).save()
  //  def produit5 = new Produit(nomProduit:'Tilemsi jaune 50Kg',dateEnreg:new Date(),prix:15000,codeProduit:'tilemsiJaune50',categorie:produitCategorie1,session:session).save()

    }
    def destroy = {
    }
}
