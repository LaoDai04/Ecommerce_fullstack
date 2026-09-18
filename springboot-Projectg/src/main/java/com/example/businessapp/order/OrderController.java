package com.example.businessapp.order;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
