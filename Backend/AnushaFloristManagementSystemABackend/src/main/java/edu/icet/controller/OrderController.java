package edu.icet.controller;

import edu.icet.dto.Order;
import edu.icet.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin
@RequiredArgsConstructor
public class OrderController {

    private final OrderService service;

    @PostMapping("/add-order")
    public void addOrder(@RequestBody Order order){
        service.addOrder(order);
    }

    @PutMapping("/update-order")
    public void updateOrder(@RequestBody Order order){
        service.updateOrder(order);
    }

    @DeleteMapping("/delete-order/{id}")
    public void deleteOrder(@PathVariable Integer id){
        service.deleteOrder(id);
    }

    @GetMapping("/search-order/{id}")
    public Order searchOrder(@PathVariable Integer id){
        return service.searchById(id);
    }

    @GetMapping("/find-all")
    public List<Order> getAll(){
        return service.getAllOrders();

    }
}
