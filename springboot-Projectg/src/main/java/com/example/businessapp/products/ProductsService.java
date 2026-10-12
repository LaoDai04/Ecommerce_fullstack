package com.example.businessapp.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.businessapp.dto.CategoryResponse;
import com.example.businessapp.dto.ProductsFilter;
import com.example.businessapp.dto.ProductsResponse;

@Service
public class ProductsService {

    private final ProductsRepository repository;
    private final String imageBaseUrl;

    public ProductsService(ProductsRepository repository, @Value("${app.image-base-url}") String imageBaseUrl) {
        this.imageBaseUrl = imageBaseUrl;
        this.repository = repository;
    }

    public List<ProductsResponse> getItems(ProductsFilter filter) {
        return repository.findAll(ProductsSpecification.withFilters(filter)).stream().map(p -> toResponse(p)).toList();
    }

    private ProductsResponse toResponse(Products p) { // service method to convert repository return into
                                                      // ProductsResponse DTO
        String imageUrl = p.getImageKey() == null ? null : imageBaseUrl + "/" + p.getImageKey();

        List<CategoryResponse> categories = p.getCategory().stream()
                .map(c -> new CategoryResponse(c.getCategoryId(), c.getCategoryName()))
                .toList();

        return new ProductsResponse(p.getItemId(), p.getItemName(), p.getPrice(),
                p.getDescription(), imageUrl, categories);
    }
}
