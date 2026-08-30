package com.example.businessapp.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.businessapp.model.Customer;
import com.example.businessapp.repository.CustomerRepository;

@Service
public class CustomerHandler {
    private final CustomerRepository repo;

    public CustomerHandler(CustomerRepository repo) {
        this.repo = repo;
    }

    public List<Customer> getAllCustomers() {
        return repo.findAll();
    }

    public ResponseEntity<Customer> getCustomerById(Integer id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    public Customer createCustomer(Customer customer) {
        return repo.save(customer);
    }

}
