package app.cstock.ControlStockBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.cstock.ControlStockBackend.entity.DetailArching;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DetailArchingRepository extends JpaRepository<DetailArching, Long> {
    @Query("SELECT * FROM detail_arching WHERE arching = ?")
    List<DetailArching> findByArchingId(Long archingId);
}
