package app.cstock.ControlStockBackend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class DateRangeDto {

    private String from;

    private String to;

    public DateRangeDto() {
    }

    public DateRangeDto(String from, String to) {
        this.from = from;
        this.to = to;
    }
}
