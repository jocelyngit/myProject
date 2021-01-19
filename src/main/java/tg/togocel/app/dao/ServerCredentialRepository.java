package tg.togocel.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tg.togocel.app.domain.ServerCredential;

@Repository
public interface ServerCredentialRepository extends JpaRepository<ServerCredential, Long> {
}
