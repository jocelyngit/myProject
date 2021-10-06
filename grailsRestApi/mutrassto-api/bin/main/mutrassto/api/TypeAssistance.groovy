package mutrassto.api

class TypeAssistance {

String typeAssistance
double montantAlloue
String descripAssistance

static constraint = {
typeAssistance blank: false
montantAlloue min : 0, scale : 2
descripAssistance blank: false

}

static mapping = {
version false
descripAssistance type : 'text'

}
}
