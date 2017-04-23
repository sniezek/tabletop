package tabletop.domain.match.tournament;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by Rafal on 2017-04-23.
 */
@Converter
public class IntegerMapConverter implements AttributeConverter<Map<Integer, Integer>, String> {

    private static final String KEY_VALUE_SEPARATOR = ",";
    private static final String ENTRY_SEPARATOR = ";";

    @Override
    public String convertToDatabaseColumn(Map<Integer, Integer> ids) {
        if (Objects.isNull(ids)) {
            return "";
        }
        List<String> idsString = ids.entrySet().stream()
                .map((entry) -> entry.getKey() + KEY_VALUE_SEPARATOR + entry.getValue())
                .collect(Collectors.toList());
        return String.join(ENTRY_SEPARATOR, idsString);
    }

    @Override
    public Map<Integer, Integer> convertToEntityAttribute(String result) {
        if ("".equals(result.trim())) {
            return new HashMap<>();
        }
        return Arrays.stream(result.split(ENTRY_SEPARATOR))
                .map(s -> s.split(KEY_VALUE_SEPARATOR))
                .collect(Collectors.toMap(kv -> Integer.parseInt(kv[0]), kv -> Integer.parseInt(kv[1])));
    }

}