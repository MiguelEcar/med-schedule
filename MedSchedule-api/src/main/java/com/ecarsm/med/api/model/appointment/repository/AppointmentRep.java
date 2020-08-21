package com.ecarsm.med.api.model.appointment.repository;

import com.ecarsm.med.api.model.appointment.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AppointmentRep extends JpaRepository<Appointment, Long> {


}
