package com.example.businessapp.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.businessapp.model.Item;
import com.example.businessapp.service.ItemHandler;

@RestController
@RequestMapping("/items")
public class ItemController {
    private final ItemHandler handler;

    public ItemController(ItemHandler handler) {
        this.handler = handler;
    }

    @GetMapping
    public List<Item> getAllItems() {
        return handler.getAllItems();
    }

}
