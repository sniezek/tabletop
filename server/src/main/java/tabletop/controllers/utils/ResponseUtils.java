package tabletop.controllers.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import tabletop.controllers.validation.errors.ControllerErrors;

import java.util.List;
import java.util.stream.Collectors;

public class ResponseUtils {
    public static ResponseEntity<List<String>> badRequest(ControllerErrors errors) {
        return new ResponseEntity<>(errors.getErrors().stream().sorted().collect(Collectors.toList()), HttpStatus.BAD_REQUEST);
    }

    public static <T> ResponseEntity<T> created(T entity) {
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    public static ResponseEntity<String> conflict(String message) {
        return new ResponseEntity<>(message, HttpStatus.CONFLICT);
    }

    public static <T> ResponseEntity<T> notFound() {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
