package ru.kolesnikov.autosales.controller;

import cz.jirutka.rsql.parser.RSQLParser;
import cz.jirutka.rsql.parser.ast.Node;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.*;
import ru.kolesnikov.autosales.data.dto.AdDto;
import ru.kolesnikov.autosales.data.dto.ManufacturerStatisticsDto;
import ru.kolesnikov.autosales.data.dto.ReferenceDataDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleAdDto;
import ru.kolesnikov.autosales.data.dto.simple.SimpleEngineDto;
import ru.kolesnikov.autosales.data.entity.Ad;
import ru.kolesnikov.autosales.data.mapper.AdMapper;
import ru.kolesnikov.autosales.data.mapper.BodyTypeMapper;
import ru.kolesnikov.autosales.data.rsql.CustomRsqlVisitor;
import ru.kolesnikov.autosales.data.specifications.AdSpecificationsBuilder;
import ru.kolesnikov.autosales.service.AdService;
import ru.kolesnikov.autosales.service.BodyTypeService;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.springframework.web.bind.annotation.RequestMethod.*;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

@RestController
@RequestMapping(path = "/api/ads")
public class AdController {

    private final AdService adService;
    private final AdMapper adMapper;

    public AdController(
            AdService adService,
            AdMapper adMapper) {
        this.adService = adService;
        this.adMapper = adMapper;
    }

    @RequestMapping(method = POST, path = "")
    public void create(@RequestBody SimpleAdDto simpleAdDto) {
        adService.create(simpleAdDto);
    }

    @RequestMapping(method = PUT, path = "/{id}")
    public void updateById(@PathVariable Long id, @RequestBody SimpleAdDto simpleAdDto) {
        adService.updateById(id, simpleAdDto);
    }

    /*@RequestMapping(method = GET, value = "")
    public List<AdDto> search(@RequestParam(value = "search", required = false) String search) {
        AdSpecificationsBuilder builder = new AdSpecificationsBuilder();
        Pattern pattern = Pattern.compile("(\\w+?)([:<>])(\\w+?),");
        Matcher matcher = pattern.matcher(search + ",");
        while (matcher.find()) {
            builder.with(matcher.group(1), matcher.group(2), matcher.group(3));
        }

        Specification<Ad> spec = builder.build();
        return adMapper.toAdDto(adService.getAll(spec));
    }*/

    @RequestMapping(method = GET, value = "")
    public List<AdDto> findAllByRsql(@RequestParam(value = "search", required = false) String search) {
        if (search == null) {
            return adMapper.toAdDto(adService.getAll());
        }
        else {
            Node rootNode = new RSQLParser().parse(search);
            Specification<Ad> spec = rootNode.accept(new CustomRsqlVisitor<>());
            return adMapper.toAdDto(adService.getAll(spec));
        }
    }

    @RequestMapping(method = GET, path = "/statistics")
    @ResponseBody
    public List<Object> getStatistics() {
        return adService.getStatistics();
    }

    @RequestMapping(method = DELETE, path = "/{id}")
    public void deleteById(@PathVariable Long id) {
        adService.deleteById(id);
    }
}
