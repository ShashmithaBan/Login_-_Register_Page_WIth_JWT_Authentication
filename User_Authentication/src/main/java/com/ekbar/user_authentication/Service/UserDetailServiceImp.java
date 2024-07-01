package com.ekbar.user_authentication.Service;

import com.ekbar.user_authentication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImp implements UserDetailService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}
