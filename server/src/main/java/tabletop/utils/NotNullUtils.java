package tabletop.utils;

import java.util.Arrays;
import java.util.Optional;

public class NotNullUtils {
    public static boolean areAllNotNull(Object... values) {
        return values.length == getNotNullCount(values);
    }

    public static long getNotNullCount(Object... values) {
        return Arrays.stream(values).map(Optional::ofNullable).filter(Optional::isPresent).count();
    }

    public static boolean isNotNull(Object value) {
        return value != null;
    }
}
