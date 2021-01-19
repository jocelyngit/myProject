package tg.togocel.app.rest;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tg.togocel.app.dao.AppInfoRepository;
import tg.togocel.app.dao.ServerRepository;
import tg.togocel.app.dao.TypeOfAppRepository;
import tg.togocel.app.domain.AppInfo;
import tg.togocel.app.domain.Server;
import tg.togocel.app.domain.TypeOfApp;
import tg.togocel.app.modelRequset.AppInfoDetails;

import java.util.List;

@RestController
@RequestMapping(value = "/app-infos")
public class AppInfoController {

    private AppInfoRepository appInfoRepository;

    private ServerRepository serverRepository;

    private TypeOfAppRepository typeOfAppRepository;

    @Autowired
    public AppInfoController(AppInfoRepository appInfoRepository, ServerRepository serverRepository, TypeOfAppRepository typeOfAppRepository) {

        this.appInfoRepository = appInfoRepository;

        this.serverRepository = serverRepository;

        this.typeOfAppRepository = typeOfAppRepository;
    }

    @GetMapping("")
    public List<AppInfo> getAll() {
        return appInfoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppInfo> getOne(@PathVariable Long id){

        HttpHeaders httpHeaders = new HttpHeaders();

        AppInfo appInfo = appInfoRepository.findById(id).orElse(null);

        return new ResponseEntity<>(appInfo, httpHeaders, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<AppInfo> save(@RequestBody AppInfoDetails appInfoDetails){

        TypeOfApp typeOfApp = typeOfAppRepository.findById(appInfoDetails.getTypeOfApp_id()).orElse(null);

        Server server = serverRepository.findById(appInfoDetails.getServer_id()).orElse(null);

        AppInfo appInfo = new AppInfo();

        HttpHeaders headers = new HttpHeaders();

        BeanUtils.copyProperties(appInfoDetails, appInfo);

        appInfo.setTypeOfApp(typeOfApp);

        appInfo.setServer(server);

        appInfo = appInfoRepository.save(appInfo);

        return new ResponseEntity<>(appInfo, headers, HttpStatus.OK);

    }


    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable Long id){

        AppInfo appInfo = appInfoRepository.findById(id).orElse(null);

        if (appInfo == null)
        {
            return false;
        }
        else {
            appInfo.setTypeOfApp(null);

            appInfo.setServer(null);

           appInfoRepository.delete(appInfo);

           appInfo = appInfoRepository.findById(id).orElse(null);

           if (appInfo == null)
           {
               return true;
           }
           else {
               return false;
           }
        }

    }

}
