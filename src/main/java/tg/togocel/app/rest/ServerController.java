package tg.togocel.app.rest;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tg.togocel.app.dao.ServerRepository;
import tg.togocel.app.dao.TypeOfServerRepository;
import tg.togocel.app.domain.Server;
import tg.togocel.app.domain.TypeOfServer;
import tg.togocel.app.modelRequset.ServerDetails;

import java.util.List;

@RestController
@RequestMapping(value = "/servers")
public class ServerController {


    private ServerRepository serverRepository;

    private TypeOfServerRepository typeOfServerRepository;

    @Autowired
    public ServerController(ServerRepository serverRepository, TypeOfServerRepository typeOfServerRepository)
    {
        this.serverRepository = serverRepository;

        this.typeOfServerRepository = typeOfServerRepository;
    }

    @GetMapping("")
    public List<Server> getAll() {
        return serverRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Server> getOne(@PathVariable Long id)
    {
        HttpHeaders headers = new HttpHeaders();

        Server server = serverRepository.findById(id).orElse(null);

        return new ResponseEntity<>(server, headers, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Server> save(@RequestBody ServerDetails serverDetails)
    {
        TypeOfServer typeOfServer = typeOfServerRepository.findById(serverDetails.getTypeOfServer_id()).orElse(null);

        Server server = new Server();

        //System.out.println("Copie de serverDetail dans server");
        BeanUtils.copyProperties(serverDetails, server);

        HttpHeaders headers = new HttpHeaders();


        server.setTypeOfServer(typeOfServer);

        server = serverRepository.save(server);

        return new ResponseEntity<>(server, headers, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Long id){

        Server server = serverRepository.findById(id).orElse(null);

        if (server == null){
            return false;
        }
        else {

            server.setTypeOfServer(null);

            serverRepository.delete(server);

            server = serverRepository.findById(id).orElse(null);

            if (server == null){
                return true;
            }else {return false;}
        }
    }


}
