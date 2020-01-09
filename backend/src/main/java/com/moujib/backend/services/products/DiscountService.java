package com.moujib.backend.services.products;

import com.moujib.backend.models.product.Discount;
import com.moujib.backend.repositories.products.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DiscountService {

    @Autowired
    private DiscountRepository repository;

    public List<Discount> getAllDiscounts(){
        List<Discount> discounts = new ArrayList<>();
        repository.findAll().forEach(discounts::add);
        return discounts;
    }

    public void createDiscount(Discount discount) {
        repository.save(discount);
    }

    public void updateDiscount(Discount discount) {
        repository.save(discount);
    }

    public void deleteDiscount(int id) {
        repository.deleteById(id);
    }
}
