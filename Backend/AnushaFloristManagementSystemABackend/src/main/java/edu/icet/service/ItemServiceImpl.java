package edu.icet.service;

import edu.icet.dto.Item;
import edu.icet.entity.ItemEntity;
import edu.icet.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class ItemServiceImpl implements ItemService{

    final ItemRepository repository;
    final ModelMapper mapper;

    @Override
    public void addItem(Item item) {
        repository.save(mapper.map(item, ItemEntity.class));
    }

    @Override
    public void updateItem(Item item) {
        repository.save(mapper.map(item, ItemEntity.class));
    }

    @Override
    public void deleteItem(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Item searchById(Integer id) {

        return mapper.map(repository.findById(id), Item.class);
    }

    @Override
    public List<Item> getAllItems() {
        ArrayList<Item> itemArrayList = new ArrayList<>();
        repository.findAll().forEach(itemEntity -> {
            itemArrayList.add(mapper.map(itemEntity, Item.class));
        });
        return itemArrayList;
    }
}
