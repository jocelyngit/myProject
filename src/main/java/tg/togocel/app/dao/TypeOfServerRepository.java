package tg.togocel.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tg.togocel.app.domain.TypeOfServer;

@Repository
public interface TypeOfServerRepository extends JpaRepository<TypeOfServer, Long> {
}
