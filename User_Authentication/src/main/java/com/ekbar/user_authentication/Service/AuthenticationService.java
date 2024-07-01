package com.ekbar.user_authentication.Service;

import com.ekbar.user_authentication.Model.User;
import com.ekbar.user_authentication.Repository.UserRepository;
import com.ekbar.user_authentication.Response.AuthenticationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthenticationResponse register(User req) throws Exception {

       User user = new User();

       user.setFirstName(req.getFirstName());
       user.setLastName(req.getLastName());
       user.setUsername(req.getUsername());
       user.setPassword(passwordEncoder.encode(req.getPassword()));

       user.setRole(req.getRole());

       user = userRepository.save(user);

       String token = jwtService.generateToken(user);

       AuthenticationResponse authenticationResponse = new AuthenticationResponse();
       authenticationResponse.setToken(token);
       authenticationResponse.setMessage("Registered Successfully");

       return authenticationResponse;
    }
    public AuthenticationResponse login(User req){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        req.getUsername(),
                        req.getPassword()
                )
        );
        User user = userRepository.findByUsername(req.getUsername()).orElseThrow();
        String token = jwtService.generateToken(user);
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setToken(token);
        authenticationResponse.setMessage("Login Success");

        return authenticationResponse ;
    }
}
