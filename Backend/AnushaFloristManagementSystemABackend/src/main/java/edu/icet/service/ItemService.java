package edu.icet.service;

import edu.icet.dto.Item;

import java.util.List;

public interface ItemService {

    void addItem(Item item);
    void updateItem(Item item);
    void deleteItem(Integer id);
    Item searchById(Integer id);
    List<Item> getAllItems();

}
