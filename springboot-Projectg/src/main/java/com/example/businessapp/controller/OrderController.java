package com.example.businessapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.businessapp.service.OrderHandler;
import com.example.businessapp.model.Order;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private OrderHandler handler;

    public OrderController(OrderHandler handler) {
        this.handler = handler;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return handler.getAllOrders();
    }

}
