package com.example.businessapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.businessapp.model.Category;
import com.example.businessapp.repository.CategoryRepository;
import com.example.businessapp.repository.CustomerRepository;

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
