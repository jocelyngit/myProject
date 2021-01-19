package tg.togocel.app.rest;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tg.togocel.app.dao.TypeOfServerRepository;
import tg.togocel.app.domain.TypeOfServer;
import tg.togocel.app.modelRequset.TypeOfServerDetails;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/type-of-servers")
public class TypeOfServerController {

    private TypeOfServerRepository typeOfServerRepository;

    @Autowired
    public TypeOfServerController(TypeOfServerRepository typeOfServerRepository)
    {
        this.typeOfServerRepository = typeOfServerRepository;
    }

    @GetMapping("")
    public List<TypeOfServer> getAll() {

        return typeOfServerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TypeOfServer> getOne(@PathVariable Long id){

        HttpHeaders headers  = new HttpHeaders();

        TypeOfServer tp = typeOfServerRepository.findById(id).orElse(null);

        return new ResponseEntity<>(tp, headers, HttpStatus.OK);

    }

    @PostMapping("")
    public ResponseEntity<TypeOfServer> save(@RequestBody TypeOfServerDetails typeOfServerDetails){

        TypeOfServer typeOfserver = new TypeOfServer();

        // conversion into java object
        BeanUtils.copyProperties(typeOfServerDetails, typeOfserver);

        HttpHeaders headers  = new HttpHeaders();

        typeOfserver = typeOfServerRepository.save(typeOfserver);

        return new ResponseEntity<>(typeOfserver, headers, HttpStatus.OK);
        }


        @DeleteMapping("/{id}")
        public Boolean delete(@PathVariable Long id){

        TypeOfServer typeOfServer = typeOfServerRepository.findById(id).orElse(null);

        if(typeOfServer == null){
            return false;
        }else {

            typeOfServerRepository.delete(typeOfServer);

            typeOfServer =  typeOfServerRepository.findById(id).orElse(null);

            if (typeOfServer == null)
            {
                return true;
            }else {
                return false;
            }
        }
        }

}
