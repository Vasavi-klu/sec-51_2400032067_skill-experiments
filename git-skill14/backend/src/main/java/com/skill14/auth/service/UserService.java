package com.skill14.auth.service;

import com.skill14.auth.dto.AuthUserResponse;
import com.skill14.auth.dto.LoginRequest;
import com.skill14.auth.dto.RegisterRequest;
import com.skill14.auth.dto.UserProfileResponse;
import com.skill14.auth.model.AppUser;
import com.skill14.auth.repository.AppUserRepository;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {

    private final AppUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(AppUserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername().trim())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Username already taken");
        }
        AppUser user = new AppUser();
        user.setUsername(request.getUsername().trim());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setEmail(trimToNull(request.getEmail()));
        user.setFullName(trimToNull(request.getFullName()));
        userRepository.save(user);
    }

    public AuthUserResponse login(LoginRequest request) {
        Optional<AppUser> opt = userRepository.findByUsername(request.getUsername().trim());
        if (opt.isEmpty() || !passwordEncoder.matches(request.getPassword(), opt.get().getPasswordHash())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }
        AppUser u = opt.get();
        return new AuthUserResponse(u.getId(), u.getUsername());
    }

    public UserProfileResponse getProfile(Long userId) {
        AppUser u = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        return new UserProfileResponse(u.getId(), u.getUsername(), u.getEmail(), u.getFullName());
    }

    private static String trimToNull(String s) {
        if (s == null) {
            return null;
        }
        String t = s.trim();
        return t.isEmpty() ? null : t;
    }
}
