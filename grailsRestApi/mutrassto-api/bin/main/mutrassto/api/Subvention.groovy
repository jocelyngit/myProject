package mutrassto.api

class Subvention implements Serializable {

double	montantSubvention
boolean estSubventionne

static belongsTo = [membre:Membre,evenement:Evenement]

static constraint = {
montantSubvention blank: false, min : 0F, scale : 2

}

static mapping = {
version false
id composite : ['membre','evenement']

}

}
