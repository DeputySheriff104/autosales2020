package ru.kolesnikov.autosales.data.specifications;

import org.springframework.data.jpa.domain.Specification;
import ru.kolesnikov.autosales.data.entity.Ad;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class AdSpecificationsBuilder {

    private final List<SearchCriteria> params;

    public AdSpecificationsBuilder() {
        params = new ArrayList<SearchCriteria>();
    }

    public AdSpecificationsBuilder with(String key, String operation, Object value) {
        params.add(new SearchCriteria(key, operation, value));
        return this;
    }

    public Specification<Ad> build() {
        if (params.size() == 0) {
            return null;
        }

        List<AdSpecification> specs = params.stream()
                .map(AdSpecification::new)
                .collect(Collectors.toList());

        AdSpecification result = specs.get(0);

        for (int i = 1; i < params.size(); i++) {
            result = specs.get(i);
            Objects.requireNonNull(Specification.where(result)).and(specs.get(i));
        }
        return result;
    }
}
