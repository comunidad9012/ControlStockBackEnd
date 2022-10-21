package app.cstock.ControlStockBackend.tools;

import app.cstock.ControlStockBackend.dto.StockRegisterDto;
import app.cstock.ControlStockBackend.entity.StockRegister;

public class StockRegisterTools {

    public StockRegister mapEntity(StockRegisterDto stockRegisterDto) {

        StockRegister stockRegister = new StockRegister();

        stockRegister.setReferrer(stockRegisterDto.getReferrer());
        stockRegister.setTechnical(stockRegisterDto.getTechnical());
        stockRegister.setTotalQuantity(stockRegisterDto.getTotalQuantity());
        stockRegister.setStartDate(stockRegisterDto.getStartDate());
        stockRegister.setEndDate(stockRegisterDto.getEndDate());

        return stockRegister;
    }

    public StockRegisterDto mapDto(StockRegister stockRegister) {

        StockRegisterDto stockRegisterDto = new StockRegisterDto();

        stockRegisterDto.setId(stockRegister.getId());
        stockRegisterDto.setReferrer(stockRegister.getReferrer());
        stockRegisterDto.setTechnical(stockRegister.getTechnical());
        stockRegisterDto.setTotalQuantity(stockRegister.getTotalQuantity());
        stockRegisterDto.setStartDate(stockRegister.getStartDate());
        stockRegisterDto.setEndDate(stockRegister.getEndDate());

        return stockRegisterDto;
    }

}
