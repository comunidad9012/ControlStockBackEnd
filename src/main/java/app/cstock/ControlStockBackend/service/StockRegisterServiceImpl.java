package app.cstock.ControlStockBackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.cstock.ControlStockBackend.dto.StockRegisterDto;
import app.cstock.ControlStockBackend.entity.ScannedProduct;
import app.cstock.ControlStockBackend.entity.StockRegister;
import app.cstock.ControlStockBackend.exeption.ResourceNoteFoundException;
import app.cstock.ControlStockBackend.repository.ScannedProductRepository;
import app.cstock.ControlStockBackend.repository.StockRegisterRepository;
import app.cstock.ControlStockBackend.tools.StockRegisterTools;

@Service
public class StockRegisterServiceImpl implements StockRegisterService {

    @Autowired
    private StockRegisterRepository stockRegisterRepository;

    @Autowired
    private ScannedProductRepository scannedProductRepository;

    StockRegisterTools stockRegisterTools = new StockRegisterTools();

    @Override
    public List<StockRegisterDto> getAllStockRegister() {
        List<StockRegister> stockRegisterList = stockRegisterRepository.findAll();
        return stockRegisterList.stream().map(stockRegister -> stockRegisterTools.mapDto(stockRegister))
                .collect(Collectors.toList());
    }

    @Override
    public StockRegisterDto getByIdStockRegister(Long id) {
        StockRegister stockRegister = stockRegisterRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("StockRegister", "id", id));
        return stockRegisterTools.mapDto(stockRegister);
    }

    @Override
    public StockRegister getByIdStockRegisterEntity(Long id) {
        StockRegister stockRegister = stockRegisterRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("StockRegister", "id", id));
        return stockRegister;
    }

    @Override
    public Long getTotalQuantity() {
        Long amount = 0L;
        List<ScannedProduct> scannedProduct = scannedProductRepository.findAll();
        for (var i : scannedProduct) {
            amount += i.getAmount();
        }
        return amount;
    }

    @Override
    public StockRegisterDto newStockRegister(StockRegisterDto stockRegisterDto) {

        StockRegister stockRegister = new StockRegister();
        stockRegister.setReferrer(stockRegisterDto.getReferrer());
        stockRegister.setTechnical(stockRegisterDto.getTechnical());
        stockRegister.setTotalQuantity(getTotalQuantity());
        stockRegister.setStartDate(stockRegisterDto.getStartDate());
        stockRegister.setEndDate(stockRegisterDto.getEndDate());

        StockRegister stockRegisterSave = stockRegisterRepository.save(stockRegister);
        return stockRegisterTools.mapDto(stockRegisterSave);

    }

    @Override
    public StockRegisterDto updateStockRegister(StockRegisterDto stockRegisterDto, Long id) {

        StockRegister stockRegister = getByIdStockRegisterEntity(id);

        stockRegister.setReferrer(stockRegisterDto.getReferrer());
        stockRegister.setTechnical(stockRegisterDto.getTechnical());
        stockRegister.setTotalQuantity(stockRegisterDto.getTotalQuantity());
        stockRegister.setStartDate(stockRegisterDto.getStartDate());
        stockRegister.setEndDate(stockRegisterDto.getEndDate());

        StockRegister stockRegisterUpdated = stockRegisterRepository.save(stockRegister);
        return stockRegisterTools.mapDto(stockRegisterUpdated);
    }

    @Override
    public void deleteStockRegister(Long id) {
        stockRegisterRepository.delete(getByIdStockRegisterEntity(id));
    }

    @Override
    public void deleteAllStockRegisters() {
        stockRegisterRepository.deleteAll();
    }
}
