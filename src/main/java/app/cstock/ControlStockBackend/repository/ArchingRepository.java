package app.cstock.ControlStockBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import app.cstock.ControlStockBackend.entity.Arching;


import java.sql.Date;
import java.util.List;

@Repository
public interface ArchingRepository extends JpaRepository<Arching, Long> {


    @Query(
            value = "SELECT * FROM arching a WHERE a.end_date >= :from AND a.end_date <= :to ;",
            nativeQuery = true)
    List<Arching> findAllArchingByDate(@Param("from") Date from, @Param("to") Date to);

}



