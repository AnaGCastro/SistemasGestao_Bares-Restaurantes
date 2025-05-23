package com.sistemas.gestao.dtos;

public class LoginResponse {
	
	    private String token;
	    private String nome;
	    private String username;
	    private String email;

	    public LoginResponse(String token, String nome, String username, String email) {
	        this.token = token;
	        this.nome = nome;
	        this.username = username;
	        this.email = email;
	    }

	    // getters e setters...
	}


