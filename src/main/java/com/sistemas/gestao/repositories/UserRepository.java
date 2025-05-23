package com.sistemas.gestao.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemas.gestao.entities.User;


@Repository
public interface UserRepository  extends JpaRepository<User, Integer>{
	Optional<User> findByUsernameAndPassword(String username, String password);

}
