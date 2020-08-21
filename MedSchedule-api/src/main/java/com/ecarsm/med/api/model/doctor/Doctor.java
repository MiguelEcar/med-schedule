package com.ecarsm.med.api.model.doctor;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldNameConstants;

/**
 *
 * @author Ecar. S. M.
 */
@Entity
@Table(name = "DOCTOR")
@Data
@FieldNameConstants(innerTypeName = "Field")
@AllArgsConstructor
@NoArgsConstructor
public class Doctor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "DOC_NAME", length = 100)
    @NotNull
    @Size(max = 100)
    private String name;

    @Column(name = "SPECIALITY", length = 500)
    @Size(max = 500)
    @NotNull
    private String speciality;
}
