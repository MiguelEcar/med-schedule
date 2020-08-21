package com.ecarsm.med.api.model.appointment;

import com.ecarsm.med.api.baseline.helper.MyDate;
import com.ecarsm.med.api.model.customer.Customer;
import com.ecarsm.med.api.model.doctor.Doctor;
import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldNameConstants;

/**
 *
 * @author Ecar. S. M.
 */
@Entity
@Table(name = "APPOINTMENT")
@Data
@FieldNameConstants(innerTypeName = "Field")
@AllArgsConstructor
@NoArgsConstructor
public class Appointment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "APPOINTMENT_DATE")
    @NotNull
    private LocalDateTime date;

    @ManyToOne(optional = false)
    @JoinColumn(name = "DOCTOR", referencedColumnName = "ID")
    private Doctor doctor;

    @ManyToOne(optional = false)
    @JoinColumn(name = "CUSTOMER", referencedColumnName = "ID")
    private Customer customer;

    @Transient
    private MyDate dateConverted;

    @PostLoad
    public void convert() {
        this.dateConverted = new MyDate(this.date);
    }
}
