package com.ecarsm.med.api.start;

import com.ecarsm.med.api.model.appointment.Appointment;
import com.ecarsm.med.api.model.appointment.repository.AppointmentRep;
import com.ecarsm.med.api.model.customer.Customer;
import com.ecarsm.med.api.model.customer.repository.CustomerRep;
import com.ecarsm.med.api.model.doctor.Doctor;
import com.ecarsm.med.api.model.doctor.repository.DoctorRep;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 *
 * @author Ecar. S. M.
 */
@Component
@Order(2)
public class BasicStart implements ApplicationRunner {

    @Autowired
    private DoctorRep doctorRep;

    @Autowired
    private CustomerRep customerRep;

    @Autowired
    private AppointmentRep appointmentRep;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Doctor doctor = this.doctorRep.save(new Doctor(null, "Jurandir MD.", "Neurologist"));
        this.doctorRep.save(new Doctor(null, "Kirk MD.", "Oncologist"));

        Customer customer = this.customerRep.save(new Customer(null, "Clarence"));
        this.customerRep.save(new Customer(null, "Orion"));

        this.appointmentRep.save(new Appointment(null, LocalDateTime.now(), doctor, customer, null));

    }

}
