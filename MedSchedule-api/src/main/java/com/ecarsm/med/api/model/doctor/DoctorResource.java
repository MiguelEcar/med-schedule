package com.ecarsm.med.api.model.doctor;

import com.ecarsm.med.api.model.doctor.DoctorService;
import com.ecarsm.med.api.model.doctor.Doctor;
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
@RequestMapping("doctor")
@Getter
public class DoctorResource {

    @Autowired
    private DoctorService service;

    /**
     * Adding new Doctor and returns new Doctor with ID
     *
     * @param doctor
     * @return new Doctor with ID
     * @throws com.ecarsm.med.api.baseline.exception.MyException
     */
    @PostMapping
    public ResponseEntity<Doctor> save(@RequestBody Doctor doctor) throws MyException {
        try {
            doctor = this.service.save(doctor);
            return ResponseEntity.status(HttpStatus.CREATED).body(doctor);
        } catch (Exception ex) {
            throw new MyException("msg.doctor.create.error");
        }
    }

    /**
     * List All Doctors
     *
     * @return All Doctors list
     * @throws com.ecarsm.med.api.baseline.exception.MyException
     */
    @GetMapping
    public ResponseEntity<List<Doctor>> list() throws MyException {
        List<Doctor> list = this.service.findAll();
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }

}
