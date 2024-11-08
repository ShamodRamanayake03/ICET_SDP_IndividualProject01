package edu.icet.controller;

import edu.icet.dto.Supplier;
import edu.icet.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supplier")
@CrossOrigin
@RequiredArgsConstructor
public class SupplierController {

    private final SupplierService service;

    @PostMapping("/add-supplier")
    public void addSupplier(@RequestBody Supplier supplier){
        service.addSupplier(supplier);
    }

    @PutMapping("/update-supplier")
    public void updateSupplier(@RequestBody Supplier supplier){
        service.updateSupplier(supplier);
    }

    @DeleteMapping("/delete-supplier/{id}")
    public void deleteSupplier(@PathVariable Integer id){
        service.deleteSupplier(id);
    }

    @GetMapping("/search-supplier/{id}")
    public Supplier searchSupplier(@PathVariable Integer id){
        return service.searchById(id);
    }

    @GetMapping("/find-all")
    public List<Supplier> getAll(){
        return service.getAllSuppliers();

    }
}
