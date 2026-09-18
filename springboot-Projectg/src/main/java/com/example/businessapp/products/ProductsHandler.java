package com.example.businessapp.products;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.businessapp.dto.ProductsFilter;

@Service
public class ProductsHandler {
    private final ProductsRepository repo;

    public ProductsHandler(ProductsRepository repo) {
        this.repo = repo;
    }

    public List<Products> getAllItems(List<Integer> categoryIds) {
        return repo.findAll();
    }

    public Page<Products> filteredItem(
            ProductsFilter filter,
            Pageable pageable) {
        return repo.findAll(
                ProductsSpecification.withFilters(filter),
                pageable);
    }
}
