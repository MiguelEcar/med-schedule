package com.ecarsm.med.api.model.appointment;

import com.ecarsm.med.api.baseline.exception.MyException;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ecar. S. M.
 */
@RestController
@RequestMapping("appointment")
@Getter
public class AppointmentResource {

    @Autowired
    private AppointmentService service;

    /**
     * Adding new Appointment and returns new Appointment with ID
     *
     * @param appointment
     * @return new Appointment with ID
     * @throws com.ecarsm.med.api.baseline.exception.MyException
     */
    @PostMapping
    public ResponseEntity<Appointment> save(@RequestBody Appointment appointment) throws MyException {
        try {
            appointment = this.service.save(appointment);
            return ResponseEntity.status(HttpStatus.CREATED).body(appointment);
        } catch (Exception ex) {
            throw new MyException("msg.appointment.create.error");
        }
    }

    /**
     * List All Appointments
     *
     * @return All Appointments list
     * @throws com.ecarsm.med.api.baseline.exception.MyException
     */
    @GetMapping
    public ResponseEntity<List<Appointment>> list() throws MyException {
        List<Appointment> list = this.service.findAll();
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }

}
