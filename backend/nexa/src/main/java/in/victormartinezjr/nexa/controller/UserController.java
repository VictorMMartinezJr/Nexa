package in.victormartinezjr.nexa.controller;

import in.victormartinezjr.nexa.io.UserRequest;
import in.victormartinezjr.nexa.io.UserResponse;
import in.victormartinezjr.nexa.model.User;
import in.victormartinezjr.nexa.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody UserRequest request) {
        UserResponse newUser = userService.createUser(request);

        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
