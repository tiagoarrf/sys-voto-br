package com.tiago.sysvoto.sysvoto.excepitions;

public class DataIntegrityException extends RuntimeException {
    public DataIntegrityException(String msg) {
        super(msg);
    }
}
