package tg.togocel.app.rest;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tg.togocel.app.dao.ServerCredentialRepository;
import tg.togocel.app.dao.ServerRepository;
import tg.togocel.app.domain.Server;
import tg.togocel.app.domain.ServerCredential;
import tg.togocel.app.modelRequset.ServerCredentialsDetails;

import java.util.List;

@RestController
@RequestMapping(value = "/server-credentials")
public class ServerCredentialController {


    private ServerCredentialRepository serverCredentialRepository;

    private ServerRepository serverRepository;

    @Autowired
    public ServerCredentialController(ServerCredentialRepository serverCredentialRepository, ServerRepository serverRepository){

        this.serverCredentialRepository = serverCredentialRepository;

        this.serverRepository = serverRepository;
    }

    @GetMapping("")
    public List<ServerCredential> getAll(){
        return serverCredentialRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServerCredential> getOne(@PathVariable Long id){

        HttpHeaders headers = new HttpHeaders();

        ServerCredential serverCredential = serverCredentialRepository.findById(id).orElse(null);

        return new ResponseEntity<>(serverCredential, headers, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<ServerCredential> save(@RequestBody ServerCredentialsDetails serverCredentialsDetails){

        Server server = serverRepository.findById(serverCredentialsDetails.getServerId()).orElse(null);

        HttpHeaders headers = new HttpHeaders();

        ServerCredential serverCredential = new ServerCredential();

        BeanUtils.copyProperties(serverCredentialsDetails, serverCredential);

        serverCredential.setServer(server);

        serverCredential = serverCredentialRepository.save(serverCredential);

        return new ResponseEntity<>(serverCredential, headers, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Long id){

        ServerCredential serverCredential = serverCredentialRepository.findById(id).orElse(null);

        if (serverCredential == null){
            return false;
        }else {

            serverCredential.setServer(null);

            serverCredentialRepository.delete(serverCredential);

            serverCredential = serverCredentialRepository.findById(id).orElse(null);

            if (serverCredential == null){
                return true;
            }else {return false;}
        }
    }
}
