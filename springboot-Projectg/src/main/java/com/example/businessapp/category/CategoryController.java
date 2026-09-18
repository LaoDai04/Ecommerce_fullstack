package com.example.businessapp.category;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
