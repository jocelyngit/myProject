package mutrassto.api

class Evenement {

String nomEvent
Date dateEvent
String descripEvent


static constraints = {
nomEvent blank: false
descripEvent blank: false
dateEvent blank: false, min: new Date()
}

static mapping = {
version false
dateEvent type : 'date'

}
}
