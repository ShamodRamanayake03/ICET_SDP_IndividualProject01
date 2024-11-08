package edu.icet.service;

import edu.icet.dto.Order;

import java.util.List;

public interface OrderService {

    void addOrder(Order order);
    void updateOrder(Order order);
    void deleteOrder(Integer id);
    Order searchById(Integer id);
    List<Order> getAllOrders();

}
