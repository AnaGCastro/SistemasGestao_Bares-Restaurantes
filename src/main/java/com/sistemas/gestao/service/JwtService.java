package com.sistemas.gestao.service;

import org.springframework.stereotype.Service;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

	private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor("14789614789614789614789614789614".getBytes(StandardCharsets.UTF_8));

	public String generateToken(String username) {
		return Jwts.builder()
				.setSubject(username)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + 1 * 60 * 60 * 1000)) // 1 hora
				.signWith(SECRET_KEY, SignatureAlgorithm.HS256)
				.compact();		
	}

	public String extractUsername(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(SECRET_KEY)
				.build()
				.parseClaimsJws(token)
				.getBody()
				.getSubject();
	}
}
