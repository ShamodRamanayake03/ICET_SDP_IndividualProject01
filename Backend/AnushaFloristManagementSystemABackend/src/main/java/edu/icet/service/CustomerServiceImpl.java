package edu.icet.service;

import edu.icet.dto.Customer;
import edu.icet.entity.CustomerEntity;
import edu.icet.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class CustomerServiceImpl implements CustomerService{

    final CustomerRepository repository;
    final ModelMapper mapper;

    @Override
    public void addCustomer(Customer customer) {
        repository.save(mapper.map(customer, CustomerEntity.class));
    }

    @Override
    public void updateCustomer(Customer customer) {
        repository.save(mapper.map(customer, CustomerEntity.class));
    }

    @Override
    public void deleteCustomer(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Customer searchById(Integer id) {

        return mapper.map(repository.findById(id), Customer.class);
    }

    @Override
    public List<Customer> getAllCustomers() {
        ArrayList<Customer> customerArrayList = new ArrayList<>();
        repository.findAll().forEach(customerEntity -> {
            customerArrayList.add(mapper.map(customerEntity, Customer.class));
        });
        return customerArrayList;
    }
}
