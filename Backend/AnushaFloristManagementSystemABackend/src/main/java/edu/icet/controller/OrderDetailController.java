package edu.icet.controller;

import edu.icet.dto.OrderDetail;
import edu.icet.service.OrderDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orderDetail")
@CrossOrigin
@RequiredArgsConstructor
public class OrderDetailController {

    private final OrderDetailService service;

    @PostMapping("/add-orderDetail")
    public void addOrderDetail(@RequestBody OrderDetail orderDetail){
        service.addOrderDetail(orderDetail);
    }

    @PutMapping("/update-orderDetail")
    public void updateOrderDetail(@RequestBody OrderDetail orderDetail){
        service.updateOrderDetail(orderDetail);
    }

    @DeleteMapping("/delete-orderDetail/{id}")
    public void deleteOrderDetail(@PathVariable Integer id){
        service.deleteOrderDetail(id);
    }

    @GetMapping("/search-orderDetail/{id}")
    public OrderDetail searchOrderDetail(@PathVariable Integer id){
        return service.searchById(id);
    }

    @GetMapping("/find-all")
    public List<OrderDetail> getAll(){
        return service.getAllOrderDetails();

    }
}
