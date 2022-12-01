package app.cstock.ControlStockBackend.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.cstock.ControlStockBackend.dto.ArchingDto;
import app.cstock.ControlStockBackend.entity.ScannedProduct;
import app.cstock.ControlStockBackend.entity.Arching;
import app.cstock.ControlStockBackend.exeption.ResourceNoteFoundException;
import app.cstock.ControlStockBackend.repository.ArchingRepository;
import app.cstock.ControlStockBackend.tools.ArchingTools;

@Service
public class ArchingServiceImpl implements ArchingService {

    @Autowired
    private ArchingRepository archingRepository;

    ArchingTools archingTools = new ArchingTools();

    @Override
    public List<ArchingDto> getAllArching() {
        List<Arching> archingList = archingRepository.findAll();
        return archingList.stream().map(arching -> archingTools.mapDto(arching))
                .collect(Collectors.toList());
    }

    @Override
    public ArchingDto getByIdArching(Long id) {
        Arching arching = archingRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("Arching", "id", id));
        return archingTools.mapDto(arching);
    }

    @Override
    public ArchingDto newArching(ArchingDto archingDto) {
        Arching arching = archingTools.mapEntity(archingDto);
        return archingTools.mapDto(archingRepository.save(arching));
    }

    @Override
    public Long getTotalFileProductAmount(Long id) {
        //Hacer cuando termine DetailArchingService
        return  null;
    }

    @Override
    public Long getTotalScannedProductAmount(Long id){
        //Hacer cuando termine DetailArchingService
        return null;
    }
    @Override
    public Long getValence(Long id){
        //Hacer cuando termine DetailArchingService
        return null;
    }
    @Override
    public ArchingDto updateArching(ArchingDto archingDto, Long id) {

        Arching arching = archingTools.mapEntity(getByIdArching(id));

        arching.setReferrer(archingDto.getReferrer());
        arching.setStartDate(archingDto.getStartDate());
        arching.setEndDate(archingDto.getEndDate());

        Arching archingUpdated = archingRepository.save(arching);
        return archingTools.mapDto(archingUpdated);
    }

    @Override
    public void deleteArchingById(Long id) {
        archingRepository.delete(archingTools.mapEntity(getByIdArching(id)));
    }

    @Override
    public void deleteAllArching() {
        archingRepository.deleteAll();
    }
}
