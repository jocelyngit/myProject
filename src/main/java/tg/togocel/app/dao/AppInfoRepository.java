package tg.togocel.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tg.togocel.app.domain.AppInfo;

@Repository
public interface AppInfoRepository extends JpaRepository<AppInfo, Long> {

}
