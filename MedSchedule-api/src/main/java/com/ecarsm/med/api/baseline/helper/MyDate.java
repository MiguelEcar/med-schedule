package com.ecarsm.med.api.baseline.helper;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import lombok.Data;

/**
 *
 * @author Ecar. S. M.
 */
@Data
public class MyDate implements Serializable {

    private LocalDateTime literal;
    private String clean;
    private String complete;

    public MyDate(LocalDateTime date) {
        this.literal = date;
        convert();
    }

    public MyDate(String date) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'");
        this.literal = LocalDateTime.parse(date, formatter);

        convert();
    }

    private void convert() {
        this.clean = this.literal.format(DateTimeFormatter.ofPattern("yyyy-MMM-dd"));
        this.complete = this.literal.format(DateTimeFormatter.ofPattern("yyyy-MM-dd - HH:mm:ss"));
    }
}
