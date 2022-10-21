package app.cstock.ControlStockBackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.cstock.ControlStockBackend.dto.DetailRegisterDto;
import app.cstock.ControlStockBackend.entity.DetailRegister;
import app.cstock.ControlStockBackend.entity.FileProduct;
import app.cstock.ControlStockBackend.entity.ScannedProduct;
import app.cstock.ControlStockBackend.entity.StockRegister;
import app.cstock.ControlStockBackend.exeption.ResourceNoteFoundException;
import app.cstock.ControlStockBackend.repository.DetailRegisterRepository;
import app.cstock.ControlStockBackend.repository.FileProductRepository;
import app.cstock.ControlStockBackend.repository.ScannedProductRepository;
import app.cstock.ControlStockBackend.repository.StockRegisterRepository;
import app.cstock.ControlStockBackend.tools.DetailRegisterTools;

@Service
public class DetailRegisterServiceImpl implements DetailRegisterService {

    @Autowired
    private DetailRegisterRepository detailRegisterRepository;

    @Autowired
    private ScannedProductRepository scannedProductRepository;

    @Autowired
    private StockRegisterRepository stockRegisterRepository;

    @Autowired
    private FileProductRepository fileProductRepository;

    DetailRegisterTools detailRegisterTools = new DetailRegisterTools();

    @Override
    public List<DetailRegisterDto> getAllDetailRegister() {
        List<DetailRegister> detailRegisterList = detailRegisterRepository.findAll();
        return detailRegisterList.stream().map(detailRegister -> detailRegisterTools.mapDto(detailRegister))
                .collect(Collectors.toList());
    }

    @Override
    public DetailRegisterDto getByDetailRegisterId(Long id) {
        DetailRegister detailRegister = detailRegisterRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("DetailProduct", "id", id));
        return detailRegisterTools.mapDto(detailRegister);
    }

    @Override
    public DetailRegister getByDetailRegisterEntity(Long id) {
        DetailRegister detailRegister = detailRegisterRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("DetailProduct", "id", id));
        return detailRegister;
    }

    @Override
    public DetailRegisterDto newDetailRegister(Long stockRegisterId, Long scannedProductId) {

        StockRegister stockRegister = stockRegisterRepository.findById(stockRegisterId)
                .orElseThrow(() -> new ResourceNoteFoundException("StockRegister", "id", stockRegisterId));

        ScannedProduct scannedProduct = scannedProductRepository.findById(scannedProductId)
                .orElseThrow(() -> new ResourceNoteFoundException("ScannedProduct", "id", scannedProductId));

        FileProduct fileProduct = fileProductRepository.findById(scannedProduct.getFileProduct().getId())
                .orElseThrow(() -> new ResourceNoteFoundException("FileProduct", "id",
                        scannedProduct.getFileProduct().getId()));

        DetailRegister detailRegister = new DetailRegister();
        detailRegister.setStockRegister(stockRegister);
        detailRegister.setScannedProduct(scannedProduct);
        detailRegister.setAmount(fileProduct.getAmount() - scannedProduct.getAmount());
        DetailRegister saveDetailRegister = detailRegisterRepository.save(detailRegister);

        return detailRegisterTools.mapDto(saveDetailRegister);
    }

    @Override
    public void deleteDetailRegister(Long id) {
        detailRegisterRepository.delete(getByDetailRegisterEntity(id));
    }

}
