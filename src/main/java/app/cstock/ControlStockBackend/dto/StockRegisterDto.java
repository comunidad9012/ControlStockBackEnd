package app.cstock.ControlStockBackend.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockRegisterDto {

    private Long id;

    private String referrer;

    private String technical;

    private Long totalQuantity;

    private Date startDate;

    private Date endDate;

    public StockRegisterDto() {
        super();
    }

    public StockRegisterDto(Long id, String referrer, String technical, Long totalQuantity, Date startDate,
            Date endDate) {
        this.id = id;
        this.referrer = referrer;
        this.technical = technical;
        this.totalQuantity = totalQuantity;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}
