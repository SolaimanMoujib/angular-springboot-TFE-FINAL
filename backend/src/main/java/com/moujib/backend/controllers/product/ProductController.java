package com.moujib.backend.controllers.product;

import com.moujib.backend.models.product.Product;
import com.moujib.backend.services.products.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService productService;


    @GetMapping("/getAllProducts")
    public List<Product> getAllProducts(){
        List<Product> products = new ArrayList<Product>();
        Product product1 = new Product();
        product1.setId(1);
        product1.setName("Adidas SHOESXXXX");
        products.add(product1);
        return products;
//        return productService.getAllProducts();
    }
}
