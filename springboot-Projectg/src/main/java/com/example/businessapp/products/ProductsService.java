package com.example.businessapp.products;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.businessapp.dto.ProductsFilter;

@Service
public class ProductsService {

    private final ProductsRepository repository;

    public ProductsService(ProductsRepository repository) {
        this.repository = repository;
    }

    public List<Products> getItems(ProductsFilter filter) {
        return repository.findAll(ProductsSpecification.withFilters(filter));
    }

}
