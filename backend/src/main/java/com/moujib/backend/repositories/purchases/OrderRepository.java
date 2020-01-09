package com.moujib.backend.repositories.purchases;

import com.moujib.backend.models.purchase.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {

}
