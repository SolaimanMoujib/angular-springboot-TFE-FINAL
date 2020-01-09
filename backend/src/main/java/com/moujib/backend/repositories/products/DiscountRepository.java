package com.moujib.backend.repositories.products;

import com.moujib.backend.models.product.Discount;
import org.springframework.data.repository.CrudRepository;

public interface DiscountRepository extends CrudRepository<Discount, Integer> {
}
