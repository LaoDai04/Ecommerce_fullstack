package com.example.businessapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.businessapp.model.Item;
import com.example.businessapp.service.ItemHandler;

@RestController
@RequestMapping("/products")
public class ProductsController {
    private final ItemHandler handler;

    public ProductsController(ItemHandler handler) {
        this.handler = handler;
    }

    @GetMapping
    public List<Item> getAllItems() {
        return handler.getAllItems();
    }

}
