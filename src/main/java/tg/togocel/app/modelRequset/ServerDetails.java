package tg.togocel.app.modelRequset;

public class ServerDetails {

    private Long id;
    private String servername;
    private String ip;
    private String osName;
    private String brand;
    private String model;

    private Long typeOfServer_id;


    public String getServername() {
        return servername;
    }

    public void setServername(String servername) {
        this.servername = servername;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getOsName() {
        return osName;
    }

    public void setOsName(String osName) {
        this.osName = osName;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTypeOfServer_id() {
        return typeOfServer_id;
    }

    public void setTypeOfServer_id(Long typeOfServer_id) {
        this.typeOfServer_id = typeOfServer_id;
    }
}
