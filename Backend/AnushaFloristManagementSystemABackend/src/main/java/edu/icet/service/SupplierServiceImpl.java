package edu.icet.service;

import edu.icet.dto.Supplier;
import edu.icet.entity.SupplierEntity;
import edu.icet.repository.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class SupplierServiceImpl implements SupplierService{

    final SupplierRepository repository;
    final ModelMapper mapper;

    @Override
    public void addSupplier(Supplier supplier) {
        repository.save(mapper.map(supplier, SupplierEntity.class));
    }

    @Override
    public void updateSupplier(Supplier supplier) {
        repository.save(mapper.map(supplier, SupplierEntity.class));
    }

    @Override
    public void deleteSupplier(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Supplier searchById(Integer id) {

        return mapper.map(repository.findById(id), Supplier.class);
    }

    @Override
    public List<Supplier> getAllSuppliers() {
        ArrayList<Supplier> supplierArrayList = new ArrayList<>();
        repository.findAll().forEach(supplierEntity -> {
            supplierArrayList.add(mapper.map(supplierEntity, Supplier.class));
        });
        return supplierArrayList;
    }
}
