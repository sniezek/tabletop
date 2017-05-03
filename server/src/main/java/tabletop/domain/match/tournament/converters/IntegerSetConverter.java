package tabletop.domain.match.tournament.converters;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by Rafal on 2017-04-23.
 */
@Converter
public class IntegerSetConverter implements AttributeConverter<Map<Integer, Set<Integer>>, String> {

    private static final String KEY_VALUE_SEPARATOR = ",";
    private static final String ENTRY_SEPARATOR = ";";

    @Override
    public String convertToDatabaseColumn(Map<Integer, Set<Integer>> ids) {
        if (Objects.isNull(ids)) {
            return "";
        }
        List<String> idsString = ids.entrySet().stream()
                .map((entry) -> entry.getKey() + KEY_VALUE_SEPARATOR + setToString(entry.getValue()))
                .collect(Collectors.toList());
        return String.join(ENTRY_SEPARATOR, idsString);
    }

    private String setToString(Set<Integer> integers) {
        List<String> idsString = integers.stream()
                .map(integer -> Integer.toString(integer))
                .collect(Collectors.toList());
        return String.join(KEY_VALUE_SEPARATOR, idsString);
    }

    @Override
    public Map<Integer, Set<Integer>> convertToEntityAttribute(String result) {
        if ("".equals(result.trim())) {
            return new HashMap<>();
        }
        return Arrays.stream(result.split(ENTRY_SEPARATOR))
                .map(s -> s.split(KEY_VALUE_SEPARATOR))
                .collect(Collectors.toMap(kv -> Integer.parseInt(kv[0]), this::integersToSet));
    }

    private Set<Integer> integersToSet(String[] splittedIntegers) {
        HashSet<Integer> resultedSet = new HashSet<>();
        if (splittedIntegers.length < 1) {
            return resultedSet;
        }
        for (int i = 1; i < splittedIntegers.length; i++) {
            resultedSet.add(Integer.parseInt(splittedIntegers[i]));
        }
        return resultedSet;
    }
}