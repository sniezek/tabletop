package tabletop.controllers.utils;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;

import java.util.List;
import java.util.stream.Collectors;

public class ResponseUtils {
    public static ResponseEntity<List<String>> badRequest(Errors errors) {
        List<String> errorMessages = errors.getAllErrors().stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .distinct()
                .sorted()
                .collect(Collectors.toList());

        return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
    }

    public static <T> ResponseEntity<T> created(T entity) {
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    public static ResponseEntity<String> conflict(String message) {
        return new ResponseEntity<>(message, HttpStatus.CONFLICT);
    }
}
