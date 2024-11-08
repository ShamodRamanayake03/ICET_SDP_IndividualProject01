package edu.icet.controller;

import edu.icet.dto.Item;
import edu.icet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
@CrossOrigin
@RequiredArgsConstructor
public class ItemController {

    private final ItemService service;

    @PostMapping("/add-item")
    public void addItem(@RequestBody Item item){
        service.addItem(item);
    }

    @PutMapping("/update-item")
    public void updateItem(@RequestBody Item item){
        service.updateItem(item);
    }

    @DeleteMapping("/delete-item/{id}")
    public void deleteItem(@PathVariable Integer id){
        service.deleteItem(id);
    }

    @GetMapping("/search-item/{id}")
    public Item searchItem(@PathVariable Integer id){
        return service.searchById(id);
    }

    @GetMapping("/find-all")
    public List<Item> getAll(){
        return service.getAllItems();

    }
}
