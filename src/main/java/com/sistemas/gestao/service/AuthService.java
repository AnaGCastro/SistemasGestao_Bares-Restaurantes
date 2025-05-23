package com.sistemas.gestao.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemas.gestao.dtos.LoginRequest;
import com.sistemas.gestao.dtos.LoginResponse;
import com.sistemas.gestao.entities.User;


@Service
public class AuthService {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtService jwtService;
	
	
	public LoginResponse login(LoginRequest loginRequest) {
		Optional<User> userOptional = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
		
		if (userOptional.isPresent()) {
			User user = userOptional.get();
			String token = jwtService.generateToken(user.getUsername());
			return new LoginResponse(token, user.getUsername(), user.getUsername(), user.getEmail());
		} else {
			return null;
		}
	}

}
