package mutrassto.api

class UrlMappings {

    static mappings = {
        //tag::defaultMappings[]
        "/$controller/$action?/$id?(.$format)?"{
            constraints{

            }
        }


        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
