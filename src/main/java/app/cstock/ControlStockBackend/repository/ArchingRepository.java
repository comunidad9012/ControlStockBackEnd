package app.cstock.ControlStockBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.cstock.ControlStockBackend.entity.Arching;

@Repository
public interface ArchingRepository extends JpaRepository<Arching, Long> {

}
