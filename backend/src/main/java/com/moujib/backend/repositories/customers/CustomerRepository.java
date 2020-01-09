package com.moujib.backend.repositories.customers;

import com.moujib.backend.models.customer.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {
}
