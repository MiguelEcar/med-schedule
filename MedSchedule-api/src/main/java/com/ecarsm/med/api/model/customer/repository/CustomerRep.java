package com.ecarsm.med.api.model.customer.repository;

import com.ecarsm.med.api.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerRep extends JpaRepository<Customer, Long> {


}
