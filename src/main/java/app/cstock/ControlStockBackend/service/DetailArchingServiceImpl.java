package app.cstock.ControlStockBackend.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import app.cstock.ControlStockBackend.entity.DetailArching;
import app.cstock.ControlStockBackend.repository.ArchingRepository;
import app.cstock.ControlStockBackend.tools.ArchingTools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.cstock.ControlStockBackend.dto.DetailArchingDto;
import app.cstock.ControlStockBackend.entity.FileProduct;
import app.cstock.ControlStockBackend.entity.ScannedProduct;
import app.cstock.ControlStockBackend.entity.Arching;
import app.cstock.ControlStockBackend.exeption.ResourceNoteFoundException;
import app.cstock.ControlStockBackend.repository.DetailArchingRepository;
import app.cstock.ControlStockBackend.tools.DetailArchingTools;

@Service
public class DetailArchingServiceImpl implements DetailArchingService {

    @Autowired
    private DetailArchingRepository detailArchingRepository;

    @Autowired
    private ArchingService archingService;

    DetailArchingTools detailArchingTools = new DetailArchingTools();

    @Override
    public List<DetailArchingDto> getAllDetailArching(Long archingId) {
        List<DetailArching> detailArchingList = detailArchingRepository.findByArchingId(archingId);
        return detailArchingList.stream().map(detailArching -> detailArchingTools.mapDto(detailArching))
                .collect(Collectors.toList());
    }

    @Override
    public DetailArchingDto getByDetailArchingId(Long id) {
        app.cstock.ControlStockBackend.entity.DetailArching detailRegister = detailRegisterRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("DetailProduct", "id", id));
        return detailArchingTools.mapDto(detailRegister);
    }

    @Override
    public app.cstock.ControlStockBackend.entity.DetailArching getByDetailRegisterEntity(Long id) {
        app.cstock.ControlStockBackend.entity.DetailArching detailRegister = detailRegisterRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("DetailProduct", "id", id));
        return detailRegister;
    }

    @Override
    public DetailArchingDto newDetailArching(Long stockRegisterId, Long scannedProductId) {

        Arching stockRegister = stockRegisterRepository.findById(stockRegisterId)
                .orElseThrow(() -> new ResourceNoteFoundException("StockRegister", "id", stockRegisterId));

        ScannedProduct scannedProduct = scannedProductRepository.findById(scannedProductId)
                .orElseThrow(() -> new ResourceNoteFoundException("ScannedProduct", "id", scannedProductId));

        FileProduct fileProduct = fileProductRepository.findById(scannedProduct.getFileProduct().getId())
                .orElseThrow(() -> new ResourceNoteFoundException("FileProduct", "id",
                        scannedProduct.getFileProduct().getId()));

        app.cstock.ControlStockBackend.entity.DetailArching detailRegister = new app.cstock.ControlStockBackend.entity.DetailArching();
        detailRegister.setStockRegister(stockRegister);
        detailRegister.setScannedProduct(scannedProduct);
        detailRegister.setAmount(fileProduct.getAmount() - scannedProduct.getAmount());
        app.cstock.ControlStockBackend.entity.DetailArching saveDetailRegister = detailRegisterRepository.save(detailRegister);

        return detailArchingTools.mapDto(saveDetailRegister);
    }

    @Override
    public void deleteDetailArching(Long id) {
        detailRegisterRepository.delete(getByDetailRegisterEntity(id));
    }

}
