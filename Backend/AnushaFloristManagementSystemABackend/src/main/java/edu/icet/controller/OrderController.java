package edu.icet.controller;

import edu.icet.dto.Order;
import edu.icet.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
@RequiredArgsConstructor
public class OrderController {

    private final OrderService service;

    @PostMapping("/add-orders")
    public void addOrder(@RequestBody Order order){
        service.addOrder(order);
    }

    @PutMapping("/update-orders")
    public void updateOrder(@RequestBody Order order){
        service.updateOrder(order);
    }

    @DeleteMapping("/delete-orders/{id}")
    public void deleteOrder(@PathVariable Integer id){
        service.deleteOrder(id);
    }

    @GetMapping("/search-orders/{id}")
    public Order searchOrder(@PathVariable Integer id){
        return service.searchById(id);
    }

    @GetMapping("/find-all")
    public List<Order> getAll(){
        return service.getAllOrders();

    }

    @GetMapping("/find-all")
    public List<Order> getAll(@RequestParam(value = "id", required = false) Integer id) {
        if (id != null) {
            return service.getOrdersById(id);
        }
        return service.getAllOrders();
    }


}
