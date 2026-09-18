package com.example.businessapp.products;

import java.util.List;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.businessapp.dto.ProductsFilter;

@RestController
@RequestMapping("/products")
public class ProductsController {
    private final ProductsHandler handler;

    public ProductsController(ProductsHandler handler) {
        this.handler = handler;
    }

    @GetMapping
    public Page<Products> getFilteredProducts(@ParameterObject ProductsFilter filter,
            @ParameterObject Pageable pageable) {
        return handler.filteredItem(filter, pageable);
    }

}
