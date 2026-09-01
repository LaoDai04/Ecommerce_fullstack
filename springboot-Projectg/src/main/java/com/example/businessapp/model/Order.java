package com.example.businessapp.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Order() {

    }

    public Order(Integer orderId, Customer customerId, LocalDateTime createdAt) {
        this.orderId = orderId;
        this.customer = customerId;
        this.createdAt = createdAt;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public Integer getCustomerId() {
        return customer.getCustomerId();
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
