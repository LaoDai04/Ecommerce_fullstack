package com.example.businessapp.products;

import java.util.*;

import org.springframework.data.jpa.domain.Specification;

import com.example.businessapp.category.Category;
import com.example.businessapp.dto.ProductsFilter;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;

public class ProductsSpecification {

    public static Specification<Products> withFilters(ProductsFilter filter) {

        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            Join<Products, Category> categoryJoin = root.join("categories");

            if (filter.getCategory() != null) {
                predicates.add(
                        cb.equal(categoryJoin.get("category_id"), filter.getCategory()));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}