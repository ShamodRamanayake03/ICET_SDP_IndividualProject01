package edu.icet.controller;

import edu.icet.dto.User;
import edu.icet.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping("/add-user")
    public void addUser(@RequestBody User user){
        service.addUser(user);
    }

    @PutMapping("/update-user")
    public void updateUser(@RequestBody User user){
        service.updateUser(user);
    }

    @DeleteMapping("/delete-user/{id}")
    public void deleteUser(@PathVariable Integer id){
        service.deleteUser(id);
    }

    @GetMapping("/search-user/{id}")
    public User searchUser(@PathVariable Integer id){
        return service.searchById(id);
    }

    @GetMapping("/find-all")
    public List<User> getAll(){
        return service.getAllUsers();

    }
}
