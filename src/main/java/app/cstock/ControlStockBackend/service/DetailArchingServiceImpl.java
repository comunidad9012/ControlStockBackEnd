package app.cstock.ControlStockBackend.service;

import java.util.List;
import java.util.stream.Collectors;

import app.cstock.ControlStockBackend.entity.DetailArching;
import app.cstock.ControlStockBackend.repository.ArchingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.cstock.ControlStockBackend.dto.DetailArchingDto;
import app.cstock.ControlStockBackend.entity.Arching;
import app.cstock.ControlStockBackend.exeption.ResourceNoteFoundException;
import app.cstock.ControlStockBackend.repository.DetailArchingRepository;
import app.cstock.ControlStockBackend.tools.DetailArchingTools;

@Service
public class DetailArchingServiceImpl implements DetailArchingService {

    @Autowired
    private DetailArchingRepository detailArchingRepository;

    @Autowired
    private ArchingRepository archingRepository;

    DetailArchingTools detailArchingTools = new DetailArchingTools();

    @Override
    public List<DetailArchingDto> getAllDetailArching(Long archingId) {
        List<DetailArching> detailArchingList = detailArchingRepository.findDetailArchingByArchingId(archingId);
        return detailArchingList.stream().map(detailArching -> detailArchingTools.mapDto(detailArching))
                .collect(Collectors.toList());
    }

    @Override
    public DetailArchingDto getByDetailArchingId(Long id) {
        DetailArching detailArching = detailArchingRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("DetailArching", "id", id));
        return detailArchingTools.mapDto(detailArching);
    }

    @Override
    public Long getValence(Long id) {
        DetailArching detailArching = detailArchingRepository.findById(id)
                .orElseThrow(() -> new ResourceNoteFoundException("DetailArching", "id", id));
        return detailArching.getScannedProductAmount() - detailArching.getFileProductAmount();
    }

    @Override
    public DetailArchingDto newDetailArching(Long archingId, DetailArchingDto detailArchingDto) {

        Arching arching = archingRepository.findById(archingId)
                .orElseThrow(() -> new ResourceNoteFoundException("StockRegister", "id", archingId));
        DetailArching detailArching = detailArchingTools.mapEntity(detailArchingDto);
        detailArching.setArching(arching);
        DetailArching saveDetailArching = detailArchingRepository.save(detailArching);
        return detailArchingTools.mapDto(saveDetailArching);
    }

    @Override
    public void deleteDetailArching(Long id) {
        detailArchingRepository.delete(detailArchingTools.mapEntity(getByDetailArchingId(id)));
    }

    @Override
    public void deleteAllDetailArching(Long id) {
        List<DetailArching> detailArchingList = detailArchingRepository.findDetailArchingByArchingId(id);

        for (DetailArching detailArching: detailArchingList) {
            detailArchingRepository.delete(detailArching);
        }
    }


}
