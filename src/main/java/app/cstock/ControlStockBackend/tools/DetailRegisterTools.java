package app.cstock.ControlStockBackend.tools;

import app.cstock.ControlStockBackend.dto.DetailRegisterDto;
import app.cstock.ControlStockBackend.entity.DetailRegister;

public class DetailRegisterTools {

    public DetailRegister mapEntity(DetailRegisterDto detailRegisterDto) {
        DetailRegister detailRegister = new DetailRegister();
        detailRegister.setAmount(detailRegister.getAmount());
        return detailRegister;
    }

    public DetailRegisterDto mapDto(DetailRegister detailRegister) {
        DetailRegisterDto detailRegisterDto = new DetailRegisterDto();
        detailRegisterDto.setId(detailRegister.getId());
        detailRegisterDto.setStockRegister(detailRegister.getStockRegister());
        detailRegisterDto.setScannedProduct(detailRegister.getScannedProduct());
        detailRegisterDto.setAmount(detailRegister.getAmount());
        return detailRegisterDto;
    }

}
