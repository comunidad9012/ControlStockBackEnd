package app.cstock.ControlStockBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.cstock.ControlStockBackend.dto.StockRegisterDto;
import app.cstock.ControlStockBackend.service.StockRegisterService;

@RestController
@RequestMapping("/api/stock-register")
public class StockRegisterController {

    @Autowired
    private StockRegisterService stockRegisterService;

    @GetMapping
    public ResponseEntity<List<StockRegisterDto>> getAllStockRegister() {
        if (stockRegisterService.getAllStockRegister().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(stockRegisterService.getAllStockRegister(), HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<StockRegisterDto> getByIdStockRegister(@PathVariable(value = "id") Long id) {
        return new ResponseEntity<>(stockRegisterService.getByIdStockRegister(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<StockRegisterDto> createStockRegister(
            @RequestBody StockRegisterDto stockRegisterDto) {
        return new ResponseEntity<>(stockRegisterService.newStockRegister(stockRegisterDto), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StockRegisterDto> updateStockRegister(@RequestBody StockRegisterDto stockRegisterDto,
            @PathVariable(value = "id") Long id) {
        StockRegisterDto stockRegisterResponse = stockRegisterService.updateStockRegister(stockRegisterDto, id);
        return new ResponseEntity<>(stockRegisterResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteStockRegister(@PathVariable(value = "id") Long id) {
        stockRegisterService.deleteStockRegister(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity<HttpStatus> deleteAllStockRegisters() {
        stockRegisterService.deleteAllStockRegisters();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
