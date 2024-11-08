package edu.icet.service;

import edu.icet.dto.OrderDetail;
import edu.icet.entity.OrderDetailEntity;
import edu.icet.repository.OrderDetailRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class OrderDetailServiceImpl implements OrderDetailService{

    final OrderDetailRepository repository;
    final ModelMapper mapper;

    @Override
    public void addOrderDetail(OrderDetail orderDetail) {
        repository.save(mapper.map(orderDetail, OrderDetailEntity.class));
    }

    @Override
    public void updateOrderDetail(OrderDetail orderDetail) {
        repository.save(mapper.map(orderDetail, OrderDetailEntity.class));
    }

    @Override
    public void deleteOrderDetail(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public OrderDetail searchById(Integer id) {

        return mapper.map(repository.findById(id), OrderDetail.class);
    }

    @Override
    public List<OrderDetail> getAllOrderDetails() {
        ArrayList<OrderDetail> orderDetailArrayList = new ArrayList<>();
        repository.findAll().forEach(orderDetailEntity -> {
            orderDetailArrayList.add(mapper.map(orderDetailEntity, OrderDetail.class));
        });
        return orderDetailArrayList;
    }
}
