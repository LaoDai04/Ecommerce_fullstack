package com.example.businessapp.order;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class OrderHandler {
    private final OrderRepository repo;

    public OrderHandler(OrderRepository repo) {
        this.repo = repo;
    }

    public List<Order> getAllOrders() {
        return repo.findAll();
    }

}