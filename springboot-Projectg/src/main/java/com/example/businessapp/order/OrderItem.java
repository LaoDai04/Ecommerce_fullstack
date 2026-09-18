package com.example.businessapp.order;

import com.example.businessapp.products.Products;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_item")
public class OrderItem {

    @EmbeddedId
    private OrderItemId id;

    @ManyToOne
    @MapsId("orderId")
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @MapsId("itemId")
    @JoinColumn(name = "item_id")
    private Products item;

    public OrderItem() {
    }

    public OrderItem(Order order, Products item) {
        this.order = order;
        this.item = item;
        this.id = new OrderItemId(order.getOrderId(), item.getItemId());
    }

    public OrderItemId getId() {
        return id;
    }

    public void setId(OrderItemId id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Products getItem() {
        return item;
    }

    public void setItem(Products item) {
        this.item = item;
    }
}