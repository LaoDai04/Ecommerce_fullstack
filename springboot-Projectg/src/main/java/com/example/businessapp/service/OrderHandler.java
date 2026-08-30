package com.example.businessapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.businessapp.model.Order;
import com.example.businessapp.repository.OrderRepository;

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
