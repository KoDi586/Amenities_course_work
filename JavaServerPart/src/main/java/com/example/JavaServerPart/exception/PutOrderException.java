package com.example.JavaServerPart.exception;

public class PutOrderException extends RuntimeException {
    public PutOrderException(String message) {
        super(message);
    }
}
