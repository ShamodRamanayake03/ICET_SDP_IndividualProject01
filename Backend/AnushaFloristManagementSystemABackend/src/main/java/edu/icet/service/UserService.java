package edu.icet.service;

import edu.icet.dto.User;

import java.util.List;

public interface UserService {

    void addUser(User user);
    void updateUser(User user);
    void deleteUser(Integer id);
    User searchById(Integer id);
    List<User> getAllUsers();

}
