package app.cstock.ControlStockBackend.service;

import java.util.List;

import app.cstock.ControlStockBackend.dto.StockRegisterDto;
import app.cstock.ControlStockBackend.entity.StockRegister;

public interface StockRegisterService {

    public List<StockRegisterDto> getAllStockRegister();

    public StockRegisterDto getByIdStockRegister(Long id);

    public StockRegister getByIdStockRegisterEntity(Long id);

    public StockRegisterDto newStockRegister(StockRegisterDto stockRegisterDto);

    public Long getTotalQuantity();

    public StockRegisterDto updateStockRegister(StockRegisterDto stockRegisterDto, Long id);

    public void deleteStockRegister(Long id);

    public void deleteAllStockRegisters();

}
