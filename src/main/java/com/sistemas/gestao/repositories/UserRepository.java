package com.sistemas.gestao.repositories;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;

public interface UserRepository {

	List<User> findAll();

	Optional<User> findByUsernameAndPassword(String username, String password);

}
