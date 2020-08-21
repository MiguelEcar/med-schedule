package com.ecarsm.med.api.model.customer;

import com.ecarsm.med.api.baseline.exception.MyException;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ecar. S. M.
 */
@RestController
@RequestMapping("customer")
@Getter
public class CustomerResource {

    @Autowired
    private CustomerService service;

    /**
     * Adding new Customer and returns new Customer with ID
     *
     * @param customer
     * @return new Customer with ID
     * @throws com.ecarsm.med.api.baseline.exception.MyException
     */
    @PostMapping
    public ResponseEntity<Customer> save(@RequestBody Customer customer) throws MyException {
        try {
            customer = this.service.save(customer);
            return ResponseEntity.status(HttpStatus.CREATED).body(customer);
        } catch (Exception ex) {
            throw new MyException("msg.customer.create.error");
        }
    }

    /**
     * List All Customers
     *
     * @return All Customers list
     * @throws com.ecarsm.med.api.baseline.exception.MyException
     */
    @GetMapping
    public ResponseEntity<List<Customer>> list() throws MyException {
        List<Customer> list = this.service.findAll();
        return ResponseEntity.status(HttpStatus.CREATED).body(list);
    }

}
