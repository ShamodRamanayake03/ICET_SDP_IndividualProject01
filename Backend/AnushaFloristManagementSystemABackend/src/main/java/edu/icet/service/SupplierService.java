package edu.icet.service;

import edu.icet.dto.Supplier;

import java.util.List;

public interface SupplierService {

    void addSupplier(Supplier supplier);
    void updateSupplier(Supplier supplier);
    void deleteSupplier(Integer id);
    Supplier searchById(Integer id);
    List<Supplier> getAllSuppliers();
}
