package com.moujib.backend.services.purchases;

import com.moujib.backend.models.purchase.Cart;
import com.moujib.backend.repositories.purchases.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepository repository;

    public Cart getCartByCustomerId(int customerId) {
        return null;
    }
}
