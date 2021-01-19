package tg.togocel.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tg.togocel.app.domain.TypeOfApp;

@Repository
public interface TypeOfAppRepository extends JpaRepository<TypeOfApp, Long> {
}
