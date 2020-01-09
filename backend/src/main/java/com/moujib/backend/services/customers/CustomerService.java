package com.moujib.backend.services.customers;

import com.moujib.backend.models.customer.Customer;
import com.moujib.backend.repositories.customers.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    public List<Customer> getAllCustomers(){
        List<Customer> customers = new ArrayList<>();
        repository.findAll().forEach(customers::add);
        return customers;
    }

    public void createCustomer(Customer customer) {
        repository.save(customer);
    }

    public void updateCustomer(Customer customer) {
        repository.save(customer);
    }
}
