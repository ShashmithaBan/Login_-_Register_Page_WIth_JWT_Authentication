package com.ekbar.user_authentication.Response;

import lombok.Data;

@Data
public class AuthenticationResponse {

    private String token;

    private String message;

}
