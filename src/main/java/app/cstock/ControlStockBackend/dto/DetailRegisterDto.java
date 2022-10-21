package app.cstock.ControlStockBackend.dto;

import app.cstock.ControlStockBackend.entity.ScannedProduct;
import app.cstock.ControlStockBackend.entity.StockRegister;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DetailRegisterDto {

    private Long id;

    private StockRegister stockRegister;

    private ScannedProduct scannedProduct;

    private Long amount;

    public DetailRegisterDto() {
    }

    public DetailRegisterDto(Long id, StockRegister stockRegister, ScannedProduct scannedProduct, Long amount) {
        this.id = id;
        this.stockRegister = stockRegister;
        this.scannedProduct = scannedProduct;
        this.amount = amount;
    }

}
