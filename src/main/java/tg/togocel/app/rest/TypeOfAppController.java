package tg.togocel.app.rest;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tg.togocel.app.dao.TypeOfAppRepository;
import tg.togocel.app.domain.TypeOfApp;
import tg.togocel.app.modelRequset.TypeOfAppDetails;

import java.util.List;

@RestController
@RequestMapping(value = "/type-of-apps")
public class TypeOfAppController {

    private TypeOfAppRepository typeOfAppRepository;

    @Autowired
    public TypeOfAppController(TypeOfAppRepository typeOfAppRepository) {
        this.typeOfAppRepository = typeOfAppRepository;
    }


    @GetMapping("")
    public List<TypeOfApp> getAll(){
        return typeOfAppRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TypeOfApp> getOne(@PathVariable Long id){
        HttpHeaders headers = new HttpHeaders();

        TypeOfApp typeOfApp = typeOfAppRepository.findById(id).orElse(null);

        return new ResponseEntity<>(typeOfApp, headers, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<TypeOfApp> save(@RequestBody TypeOfAppDetails typeOfAppDetails) {

        TypeOfApp typeOfApp = new TypeOfApp();

        BeanUtils.copyProperties(typeOfAppDetails, typeOfApp);

        HttpHeaders headers = new HttpHeaders();

        typeOfApp = typeOfAppRepository.save(typeOfApp);

        return new ResponseEntity<>(typeOfApp, headers, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Long id){

        TypeOfApp typeOfApp = typeOfAppRepository.findById(id).orElse(null);

        if (typeOfApp == null) {
            return false;
        }else {

            typeOfAppRepository.delete(typeOfApp);

            typeOfApp = typeOfAppRepository.findById(id).orElse(null);

            if (typeOfApp == null) {
                return true;
            }else {return false;}

        }
    }

}
