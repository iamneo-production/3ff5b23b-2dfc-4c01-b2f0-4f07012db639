package com.kp.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kp.demo.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}