package com.moujib.backend.services.products;

import com.moujib.backend.models.product.Product;
import com.moujib.backend.repositories.products.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public void createProduct(Product product) {
        repository.save(product);
    }

    public void updateProduct(Product product) {
        repository.save(product);
    }

    public void deleteProduct(int id) {
        repository.deleteById(id);
    }

    public List<Product> getAllProducts() {
        List products = new ArrayList<>();
        repository.findAll().forEach(products::add);
        return products;
    }

    public List<Product> getProductsBySubCategory(String subCategory) {
        return repository.findProductBySubCategory(subCategory);
    }

    public Product getProductById(int id) {
        return repository.findProductById(id);
    }
}
