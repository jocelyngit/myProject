package tg.togocel.app.modelRequset;

public class AppInfoDetails {

    private Long id;
    private String name;
    private int port;
    private String description;
    private String status;          // DEV, LIVE, SUSPENDED
    private String homePageLink;
    private String apiLinkModel;
    private String location;

    private Long server_id;

    private Long typeOfApp_id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getHomePageLink() {
        return homePageLink;
    }

    public void setHomePageLink(String homePageLink) {
        this.homePageLink = homePageLink;
    }

    public String getApiLinkModel() {
        return apiLinkModel;
    }

    public void setApiLinkModel(String apiLinkModel) {
        this.apiLinkModel = apiLinkModel;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Long getServer_id() {
        return server_id;
    }

    public void setServer_id(Long server_id) {
        this.server_id = server_id;
    }

    public Long getTypeOfApp_id() {
        return typeOfApp_id;
    }

    public void setTypeOfApp_id(Long typeOfApp_id) {
        this.typeOfApp_id = typeOfApp_id;
    }
}
