package edu.icet.service;

import edu.icet.dto.OrderDetail;

import java.util.List;

public interface OrderDetailService {

    void addOrderDetail(OrderDetail orderDetail);
    void updateOrderDetail(OrderDetail orderDetail);
    void deleteOrderDetail(Integer id);
    OrderDetail searchById(Integer id);
    List<OrderDetail> getAllOrderDetails();

}
