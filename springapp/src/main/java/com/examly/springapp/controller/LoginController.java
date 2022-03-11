package com.examly.springapp;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class LoginController {
    @GetMapping("/login")
    @CrossOrigin(origins = "*")
    public String hello(){
        return "hi";
    }
}
