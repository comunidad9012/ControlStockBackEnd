package app.cstock.ControlStockBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.cstock.ControlStockBackend.entity.StockRegister;

@Repository
public interface StockRegisterRepository extends JpaRepository<StockRegister, Long> {

}
