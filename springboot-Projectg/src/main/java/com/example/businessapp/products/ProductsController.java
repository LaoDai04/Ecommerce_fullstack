package com.example.businessapp.products;

import java.util.List;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.businessapp.dto.ProductsFilter;
import com.example.businessapp.dto.ProductsResponse;

@RestController
@RequestMapping("/products")
public class ProductsController {
    private final ProductsService service;

    public ProductsController(ProductsService service) {
        this.service = service;
    }

    @GetMapping
    public List<ProductsResponse> getFilteredProducts(@ParameterObject ProductsFilter filter) {
        return service.getItems(filter);
    }

}
