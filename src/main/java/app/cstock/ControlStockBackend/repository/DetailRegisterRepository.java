package app.cstock.ControlStockBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import app.cstock.ControlStockBackend.entity.DetailRegister;

public interface DetailRegisterRepository extends JpaRepository<DetailRegister, Long> {

}
