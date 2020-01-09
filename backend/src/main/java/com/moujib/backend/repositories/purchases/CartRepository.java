package com.moujib.backend.repositories.purchases;

import com.moujib.backend.models.purchase.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends CrudRepository<Cart, Integer> {
}
