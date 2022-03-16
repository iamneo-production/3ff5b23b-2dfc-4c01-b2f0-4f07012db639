package com.examly.springapp;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class SignupController {

    private final UserRepository repository;

    SignupController(UserRepository repository){
        this.repository = repository;
    }

    @PostMapping("/signup")
    @CrossOrigin(origins = "*")
    public boolean saveUser(@RequestBody UserModel newUser){
        try{
            repository.save(newUser);
        } catch(Exception e){
            System.out.println(e);
            return false;
        }
        return true;
    }
}
