package mutrassto.api

class Parent {

String nomPrenomParent
String adressParent
//boolean lienDirect

static belongsTo = [lienParent:LienParent,membre:Membre]

static constraint = {
nomPrenomParent blank: false, matches: "[a-zA-Z]+"
adressParent blank : false

}

static mapping = {
version false

}

}
