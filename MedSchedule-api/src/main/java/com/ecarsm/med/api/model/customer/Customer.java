package com.ecarsm.med.api.model.customer;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.experimental.FieldNameConstants;

/**
 *
 * @author Ecar. S. M.
 */
@Entity
@Table(name = "CUSTOMER")
@Data
@FieldNameConstants(innerTypeName = "Field")
public class Customer implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "CUSTOMER_NAME", length = 100)
    @NotNull
    @Size(max = 100)
    private String name;
}
