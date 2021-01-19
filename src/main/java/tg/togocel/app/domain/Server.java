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
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Server implements Serializable {

    private static final long serialversionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String servername;
    private String ip;
    private String osName;
    private String brand;
    private String model;

    @ManyToOne
    private TypeOfServer typeOfServer;

    @OneToMany(mappedBy = "server", orphanRemoval = true)
    @JsonIgnore
    private List<AppInfo> appInfos = new ArrayList<>();

    @OneToMany(mappedBy = "server", orphanRemoval = true)
    @JsonIgnore
    private List<ServerCredential> serverCredentials = new ArrayList<>();
}
