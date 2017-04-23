package tabletop.domain.exceptions;

public class BadRequestException extends RuntimeException {

    private ErrorInfo errorInfo;

    public BadRequestException(ErrorInfo errorInfo){
        super(errorInfo.getDescription());
        this.errorInfo = errorInfo;
    }

    public ErrorInfo getErrorInfo() {
        return errorInfo;
    }
}
