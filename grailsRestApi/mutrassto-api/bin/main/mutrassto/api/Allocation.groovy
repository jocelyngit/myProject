package mutrassto.api

class Allocation {

double	montantAllocation
String	anneeExercice 

static constraint = {
montantAllocation blank: false, min : 0, scale : 2
anneeExercice blank: false, unique : true
}

static mapping = {
version false

}
}
