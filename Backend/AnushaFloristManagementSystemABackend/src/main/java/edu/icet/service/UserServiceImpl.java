package edu.icet.service;

import edu.icet.dto.User;
import edu.icet.entity.UserEntity;
import edu.icet.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    final UserRepository repository;
    final ModelMapper mapper;

    @Override
    public void addUser(User user) {
        repository.save(mapper.map(user, UserEntity.class));
    }

    @Override
    public void updateUser(User user) {
        repository.save(mapper.map(user, UserEntity.class));
    }

    @Override
    public void deleteUser(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public User searchById(Integer id) {

        return mapper.map(repository.findById(id), User.class);
    }

    @Override
    public List<User> getAllUsers() {
        ArrayList<User> userArrayList = new ArrayList<>();
        repository.findAll().forEach(userEntity -> {
            userArrayList.add(mapper.map(userEntity, User.class));
        });
        return userArrayList;
    }
}
