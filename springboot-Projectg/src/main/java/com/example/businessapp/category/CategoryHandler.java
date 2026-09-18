package com.example.businessapp.category;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.businessapp.customer.CustomerRepository;

@Service
public class CategoryHandler {

    private CategoryRepository repo;

    public CategoryHandler(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> getAllCategory() {
        return repo.findAll();
    }

}
