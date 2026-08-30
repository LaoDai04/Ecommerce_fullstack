package com.example.businessapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.businessapp.model.Item;
import com.example.businessapp.repository.ItemRepository;

@Service
public class ItemHandler {
    private final ItemRepository repo;

    public ItemHandler(ItemRepository repo) {
        this.repo = repo;
    }

    public List<Item> getAllItems() {
        return repo.findAll();
    }
}
