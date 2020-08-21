package com.ecarsm.med.api.model.doctor.repository;

import com.ecarsm.med.api.model.doctor.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DoctorRep extends JpaRepository<Doctor, Long> {


}
