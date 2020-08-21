package com.ecarsm.med.api.model.appointment;

import com.ecarsm.med.api.baseline.exception.MyException;
import com.ecarsm.med.api.model.appointment.repository.AppointmentRep;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ecar. S. M.
 */
@Service
public class AppointmentService {

    @Autowired
    private AppointmentRep rep;

    public List<Appointment> findAll() {
        return this.rep.findAll(new Sort(Sort.Direction.DESC, Appointment.Field.date));
    }

    public Appointment save(Appointment appointment) throws MyException {
        return this.rep.save(appointment);
    }
}
