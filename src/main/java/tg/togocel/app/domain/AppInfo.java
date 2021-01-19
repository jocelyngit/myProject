package tg.togocel.app.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class AppInfo implements Serializable {

    private static final long serialversionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int port;
    private String description;
    private String status;          // DEV, LIVE, SUSPENDED
    private String homePageLink;
    private String apiLinkModel;
    private String location;

    @ManyToOne
    private Server server;

    @ManyToOne
    private TypeOfApp typeOfApp;
}
