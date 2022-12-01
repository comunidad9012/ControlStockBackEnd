package app.cstock.ControlStockBackend.service;

import java.util.List;

import app.cstock.ControlStockBackend.dto.DetailArchingDto;

public interface DetailArchingService {

    public List<DetailArchingDto> getAllDetailArching(Long id);

    public DetailArchingDto getByDetailArchingId(Long id);

    public Integer getValence(Long id);

    public DetailArchingDto newDetailArching(Long stockRegisterId, Long scannedProductId);

    public void deleteDetailArching(Long id);

    public void deleteAllDetailArching(Long id);

}
