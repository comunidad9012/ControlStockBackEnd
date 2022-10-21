package app.cstock.ControlStockBackend.service;

import java.util.List;

import app.cstock.ControlStockBackend.dto.DetailRegisterDto;
import app.cstock.ControlStockBackend.entity.DetailRegister;

public interface DetailRegisterService {

    public List<DetailRegisterDto> getAllDetailRegister();

    public DetailRegisterDto getByDetailRegisterId(Long id);

    public DetailRegister getByDetailRegisterEntity(Long id);

    public DetailRegisterDto newDetailRegister(Long stockRegisterId, Long scannedProductId);

    public void deleteDetailRegister(Long id);

}
