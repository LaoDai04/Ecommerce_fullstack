package com.example.businessapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.businessapp.model.Category;
import com.example.businessapp.service.CategoryHandler;

@RestController
@RequestMapping("/category")
public class CategoryController {
    private final CategoryHandler handler;

    public CategoryController(CategoryHandler handler) {
        this.handler = handler;
    }

    @GetMapping
    public List<Category> getAllCategory() {
        return handler.getAllCategory();
    }

}
