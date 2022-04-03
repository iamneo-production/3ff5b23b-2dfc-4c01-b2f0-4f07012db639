package com.kp.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kp.demo.entity.Book;
import com.kp.demo.repository.BookRepository;

@CrossOrigin
@RestController
@RequestMapping("/book")
public class BookController {
	@Autowired
	BookRepository bookRepository;

	@GetMapping("/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable("id") Integer id) {

		Optional<Book> book = bookRepository.findById(id);
		if (book.isPresent()) {
			return new ResponseEntity<>(book.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping("/list")
	public ResponseEntity<List<Book>> getAllBooks() {
		try {
			List<Book> books = bookRepository.findAll();
			if (books.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(books, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/add")
	public ResponseEntity<Book> addBook(@RequestBody Book model) {
		try {
			Book book = bookRepository.save(model);
			return new ResponseEntity<>(book, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable("id") Integer id, @RequestBody Book model) {
		Optional<Book> existingBook = bookRepository.findById(id);
		if (existingBook.isPresent()) {
			Book book = existingBook.get();
			book.setSerialNumber(model.getSerialNumber());
			book.setName(model.getName());
			book.setPrice(model.getPrice());
			book.setDescription(model.getDescription());
			book.setImageUrl(model.getImageUrl());
			return new ResponseEntity<>(bookRepository.save(book), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") Integer id) {
		try {
			bookRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
