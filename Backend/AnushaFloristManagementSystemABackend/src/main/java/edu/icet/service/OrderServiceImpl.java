package edu.icet.service;

import edu.icet.dto.Order;
import edu.icet.entity.OrderEntity;
import edu.icet.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class OrderServiceImpl implements OrderService{

    final OrderRepository repository;
    final ModelMapper mapper;

    @Override
    public void addOrder(Order order) {
        repository.save(mapper.map(order, OrderEntity.class));
    }

    @Override
    public void updateOrder(Order order) {
        repository.save(mapper.map(order, OrderEntity.class));
    }

    @Override
    public void deleteOrder(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Order searchById(Integer id) {

        return mapper.map(repository.findById(id), Order.class);
    }

    @Override
    public List<Order> getAllOrders() {
        ArrayList<Order> orderArrayList = new ArrayList<>();
        repository.findAll().forEach(orderEntity -> {
            orderArrayList.add(mapper.map(orderEntity, Order.class));
        });
        return orderArrayList;
    }

    public List<Order> getOrdersById(Integer id) {
        List<Order> orderList = new ArrayList<>();


        Optional<OrderEntity> orderEntityOptional = repository.findById(id);
        if (orderEntityOptional.isPresent()) {
            OrderEntity orderEntity = orderEntityOptional.get();
            orderList.add(mapper.map(orderEntity, Order.class));
        }
        return orderList;
    }

}
