package com.moujib.backend.repositories.products;

import com.moujib.backend.models.product.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {

    List<Product> findProductBySubCategory(String subCategory);

    Product findProductById(int id);

}
