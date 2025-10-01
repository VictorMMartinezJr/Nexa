package in.victormartinezjr.nexa.controller;

import in.victormartinezjr.nexa.io.UserRequest;
import in.victormartinezjr.nexa.io.UserResponse;
import in.victormartinezjr.nexa.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody UserRequest request) {
        UserResponse newUser = userService.createUser(request);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @GetMapping("/account")
    public UserResponse getAccount(@CurrentSecurityContext(expression = "authentication?.name") String email) {
        return userService.getUserAccount(email);
    }
}
