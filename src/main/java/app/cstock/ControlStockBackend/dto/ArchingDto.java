package app.cstock.ControlStockBackend.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArchingDto {

    private Long id;

    private String referrer;

    private Date startDate;

    private Date endDate;

    public ArchingDto() {
        super();
    }

    public ArchingDto(Long id, String referrer, String technical, Long totalQuantity, Date startDate,
                      Date endDate) {
        this.id = id;
        this.referrer = referrer;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}
