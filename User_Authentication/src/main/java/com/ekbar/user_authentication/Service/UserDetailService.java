package com.ekbar.user_authentication.Service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserDetailService extends UserDetailsService {
    public UserDetails loadUserByUsername(String username);
}
