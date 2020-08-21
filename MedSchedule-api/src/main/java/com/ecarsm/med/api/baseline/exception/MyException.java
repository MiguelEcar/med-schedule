package com.ecarsm.med.api.baseline.exception;

/**
 *
 * @author Ecar. S. M.
 */
public class MyException extends Exception {

    public MyException() {
        super("[Error] Exception Handler!");
    }

    public MyException(String message) {
        super(message);
    }
}
