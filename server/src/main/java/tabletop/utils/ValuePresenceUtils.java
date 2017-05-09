package tabletop.utils;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class ValuePresenceUtils {
    public static boolean areAllPresent(Object... values) {
        List<Object> valuesList = Arrays.asList(values);

        return valuesList.size() == valuesList.stream().map(Optional::ofNullable).filter(Optional::isPresent).count();
    }

    public static long getPresentCount(Object... values) {
        return Arrays.stream(values).map(Optional::ofNullable).filter(Optional::isPresent).count();
    }

    public static boolean isPresent(Object value) {
        return Optional.ofNullable(value).isPresent();
    }
}
