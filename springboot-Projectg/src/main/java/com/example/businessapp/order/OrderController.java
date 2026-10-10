package com.example.businessapp.order;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/orders")
public class OrderController {
    private OrderHandler handler;

    public OrderController(OrderHandler handler) {
        this.handler = handler;
    }

    @GetMapping("/me")
    public List<Order> getMyOrder(Authentication auth) {
        return handler.getUserOrder(auth.getName());
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return handler.getAllOrders();
    }

}
