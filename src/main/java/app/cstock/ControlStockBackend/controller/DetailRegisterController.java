package app.cstock.ControlStockBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.cstock.ControlStockBackend.dto.DetailRegisterDto;
import app.cstock.ControlStockBackend.service.DetailRegisterService;

@RestController
@RequestMapping("/api")
public class DetailRegisterController {

    @Autowired
    private DetailRegisterService detailRegisterService;

    @GetMapping("/detail-register")
    public ResponseEntity<List<DetailRegisterDto>> getAllDetailRegister() {
        return new ResponseEntity<>(detailRegisterService.getAllDetailRegister(), HttpStatus.OK);
    }

    @GetMapping("/detail-register/{id}")
    public ResponseEntity<DetailRegisterDto> getByIdDetailRegister(@PathVariable(value = "id") Long id) {
        return new ResponseEntity<>(detailRegisterService.getByDetailRegisterId(id), HttpStatus.OK);
    }

    @PostMapping("/stock-register/{stock-register-id}/detail-register")
    public ResponseEntity<DetailRegisterDto> saveDetailRegister(
            @PathVariable(value = "stock-register-id") Long stockRegisterId,
            @RequestParam Long scannedProductId) {

        return new ResponseEntity<>(detailRegisterService.newDetailRegister(stockRegisterId, scannedProductId),
                HttpStatus.OK);
    }

    // Hacerle control de errores al borrar
    @DeleteMapping("/detail-register/{id}")
    public ResponseEntity<String> deleteDetailRegister(@PathVariable(value = "id") Long id) {
        detailRegisterService.deleteDetailRegister(id);
        return new ResponseEntity<>("Producto eliminado correctamente", HttpStatus.OK);
    }
}
