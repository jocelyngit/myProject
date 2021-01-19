package tg.togocel.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tg.togocel.app.domain.Server;

@Repository
public interface ServerRepository extends JpaRepository<Server, Long> {
}
