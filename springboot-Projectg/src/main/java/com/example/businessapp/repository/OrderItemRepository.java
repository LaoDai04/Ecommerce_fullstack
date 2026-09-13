package com.example.businessapp.repository;

import com.example.businessapp.model.OrderItem;
import com.example.businessapp.model.OrderItemId;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, OrderItemId> {

}
