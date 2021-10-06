package mutrassto.api

class Fournisseur {

String raisonSociale
String adressFournisseur
String telFournisseur
String emailFournisseur

static constraints = {
raisonSociale  blank: false
adressFournisseur blank: false
emailFournisseur email: true, blank: false
telFournisseur blank: false

}

static mapping = {
version false

}

}
