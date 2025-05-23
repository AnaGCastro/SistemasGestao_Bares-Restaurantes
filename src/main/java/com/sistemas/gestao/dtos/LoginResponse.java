package com.sistemas.gestao.dtos;

import com.sistemas.gestao.entities.User;

public class LoginResponse {
	
	    private String token;
	    private String name;
	    private String username;
	    private String email;

	    public LoginResponse(String token, String name, String username, String email) {
	        this.token = token;
	        this.name = name;
	        this.username = username;
	        this.email = email;
	    }
	    
	    
	    public LoginResponse(String token, String username) {
	        this.token = token;
	        this.username = username;
	        this.name = null;
	        this.email = null;
	    }
	    
	    //New Constructor that accepts a User object
	    public LoginResponse(String token, User user) {
	    	this.token = token;
	    	this.username = user.getUsername();
	    	this.name = user.getUsername();
	    	this.email = user.getEmail();
	    }


		public String getToken() {
			return token;
		}


		public void setToken(String token) {
			this.token = token;
		}


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public String getUsername() {
			return username;
		}


		public void setUsername(String username) {
			this.username = username;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}
	    
	    
	}


