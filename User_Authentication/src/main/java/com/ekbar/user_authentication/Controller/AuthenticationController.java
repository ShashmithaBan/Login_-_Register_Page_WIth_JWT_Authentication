package com.ekbar.user_authentication.Controller;

import com.ekbar.user_authentication.Model.User;
import com.ekbar.user_authentication.Repository.UserRepository;
import com.ekbar.user_authentication.Response.AuthenticationResponse;
import com.ekbar.user_authentication.Service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody User req
    ) throws Exception {
        Optional<User> existingUser = userRepository.findByUsername(req.getUsername());
        if (existingUser.isPresent()) {
            throw new Exception("The Provided email is already exists . Try with another account.");
        }else {
            return ResponseEntity.ok(authenticationService.register(req));
        }

    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody User req
    ){
        return ResponseEntity.ok(authenticationService.login(req));
    }

    @GetMapping("/admin/demo")
    public String demo(){
        return "This is from a authenticated url";
    }
}
