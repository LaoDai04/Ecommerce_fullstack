package com.example.businessapp.dto;

import java.math.BigDecimal;
import java.util.List;

public record ProductsResponse(Integer itemId, String itemName, BigDecimal price,
        String description, String imageUrl, List<CategoryResponse> category) {
}