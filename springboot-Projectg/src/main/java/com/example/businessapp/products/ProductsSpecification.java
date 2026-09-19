package com.example.businessapp.products;

import java.util.*;

import org.springframework.data.jpa.domain.Specification;

import com.example.businessapp.dto.ProductsFilter;

import jakarta.persistence.criteria.Predicate;

public class ProductsSpecification {

    public static Specification<Products> withFilters(ProductsFilter filter) {

        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (filter.getCategoryId() != null && !filter.getCategoryId().isEmpty()) {

                predicates.add(root.join("categories").get("category_id").in(filter.getCategoryId()));

                query.distinct(true);
            }
            if (filter.getMinPrice() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("price"), filter.getMinPrice()));
            }
            if (filter.getMaxPrice() != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("price"), filter.getMaxPrice()));
            }
            if (filter.getSearch() != null && !filter.getSearch().isBlank()) { //the get search is the text that user put in the box
                predicates.add(cb.like(
                        cb.lower(root.get("itemName")),
                        "%" + filter.getSearch().trim().toLowerCase() + "%"));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
