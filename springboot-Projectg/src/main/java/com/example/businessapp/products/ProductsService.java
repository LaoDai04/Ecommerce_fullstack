package com.example.businessapp.products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.businessapp.dto.ProductsFilter;
import com.example.businessapp.dto.ProductsResponse;

@Service
public class ProductsService {

    private final ProductsRepository repository;

    public ProductsService(ProductsRepository repository) {
        this.repository = repository;
    }

    public Page<ProductsResponse> getItems(
            ProductsFilter filter,
            Pageable pageable) {

        Specification<Products> specification = ProductsSpecification.withFilters(filter);

        return repository
                .findAll(specification, pageable)
                .map(this::toResponse);
    }

    private ProductsResponse toResponse(Products product) {
        return new ProductsResponse(
                product.getItemId() != null ? product.getItemId().longValue() : null,
                product.getItemName(),
                product.getPrice());
    }
}
