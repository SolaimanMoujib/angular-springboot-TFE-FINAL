package com.moujib.backend.services.purchases;

import com.moujib.backend.models.purchase.Order;
import com.moujib.backend.repositories.purchases.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public List<Order> getAllOrders() {
        List<Order> orders = new ArrayList<>();
        repository.findAll().forEach(orders::add);
        return orders;
    }

    public List<Order> getOrdersByCustomer(int customerId) {
        List<Order> orders = new ArrayList<>();
        // TODO: Change here
        return orders;
    }

    public void updateOrder(Order order) {
        repository.save(order);
    }

    public void createOrder(Order order) {
        repository.save(order);
    }
}
