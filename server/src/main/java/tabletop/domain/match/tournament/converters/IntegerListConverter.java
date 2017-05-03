package tabletop.domain.match.tournament.converters;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Created by Rafal on 2017-04-23.
 */
@Converter
public class IntegerListConverter implements AttributeConverter<List<Integer>, String> {

    private static final String SEPARATOR = ",";

    @Override
    public String convertToDatabaseColumn(List<Integer> ids) {
        if (Objects.isNull(ids)) {
            return "";
        }
        List<String> idsString = ids.stream().map(Object::toString).collect(Collectors.toList());
        return String.join(SEPARATOR, idsString);
    }

    @Override
    public List<Integer> convertToEntityAttribute(String result) {
        if ("".equals(result.trim())) {
            return new LinkedList<>();
        }
        return Arrays.stream(result.split(SEPARATOR)).map(Integer::parseInt).collect(Collectors.toList());
    }

}