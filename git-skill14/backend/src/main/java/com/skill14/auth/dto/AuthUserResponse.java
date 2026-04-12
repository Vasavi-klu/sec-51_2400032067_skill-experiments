package com.skill14.auth.dto;

public class AuthUserResponse {

    private Long userId;
    private String username;

    public AuthUserResponse() {
    }

    public AuthUserResponse(Long userId, String username) {
        this.userId = userId;
        this.username = username;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
