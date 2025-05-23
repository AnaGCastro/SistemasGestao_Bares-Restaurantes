package com.sistemas.gestao.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemas.gestao.entities.User;
import com.sistemas.gestao.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public Optional<User> authenticate(String username, String password) {
		return userRepository.findByUsernameAndPassword(username, password);
	}

}
