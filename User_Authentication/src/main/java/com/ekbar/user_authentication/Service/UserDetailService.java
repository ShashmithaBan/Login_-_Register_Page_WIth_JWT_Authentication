package com.ekbar.user_authentication.Service;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserDetailService {
    public UserDetails loadUserByUsername(String username);
}
