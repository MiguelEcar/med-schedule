package com.ecarsm.med.api.model.doctor;

import com.ecarsm.med.api.baseline.exception.MyException;
import com.ecarsm.med.api.model.doctor.repository.DoctorRep;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ecar. S. M.
 */
@Service
public class DoctorService {

    @Autowired
    private DoctorRep rep;

    public List<Doctor> findAll() {
        return this.rep.findAll();
    }

    public Doctor save(Doctor doctor) throws MyException {
        return this.rep.save(doctor);
    }
}
