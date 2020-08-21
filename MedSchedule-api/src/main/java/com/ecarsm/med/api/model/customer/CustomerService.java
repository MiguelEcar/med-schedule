package com.ecarsm.med.api.model.customer;

import com.ecarsm.med.api.baseline.exception.MyException;
import com.ecarsm.med.api.model.customer.repository.CustomerRep;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ecar. S. M.
 */
@Service
public class CustomerService {

    @Autowired
    private CustomerRep rep;

    public List<Customer> findAll() {
        return this.rep.findAll();
    }

    public Customer save(Customer doctor) throws MyException {
        return this.rep.save(doctor);
    }
}
