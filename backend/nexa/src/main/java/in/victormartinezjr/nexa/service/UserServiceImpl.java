package in.victormartinezjr.nexa.service;

import in.victormartinezjr.nexa.io.UserRequest;
import in.victormartinezjr.nexa.io.UserResponse;
import in.victormartinezjr.nexa.model.User;
import in.victormartinezjr.nexa.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;

    @Override
    public UserResponse createUser(UserRequest request) {
        User newUser = convertToUser(request);
        // Make sure email doesn't exist already
        if (!userRepo.existsByEmail(newUser.getEmail())) {
            newUser = userRepo.save(newUser);
            return convertToUserResponse(newUser);
        }
       throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
    }

    private UserResponse convertToUserResponse(User newUser) {
        return UserResponse.builder()
                .userId(newUser.getUserId())
                .name(newUser.getName())
                .email(newUser.getEmail())
                .build();
    }

    private User convertToUser(UserRequest request) {
        return User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .userId(UUID.randomUUID().toString())
                .build();
    }
}
