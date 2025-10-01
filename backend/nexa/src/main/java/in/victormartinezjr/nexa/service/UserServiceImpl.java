package in.victormartinezjr.nexa.service;

import in.victormartinezjr.nexa.io.UserRequest;
import in.victormartinezjr.nexa.io.UserResponse;
import in.victormartinezjr.nexa.model.UserModel;
import in.victormartinezjr.nexa.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse createUser(UserRequest request) {
        UserModel newUser = convertToUser(request);
        // Make sure email doesn't exist already
        if (!userRepo.existsByEmail(newUser.getEmail())) {
            newUser = userRepo.save(newUser);
            return convertToUserResponse(newUser);
        }
       throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already exists");
    }

    @Override
    public UserResponse getUserAccount(String email) {
        UserModel user = userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return convertToUserResponse(user);
    }

    private UserResponse convertToUserResponse(UserModel newUser) {
        return UserResponse.builder()
                .userId(newUser.getUserId())
                .name(newUser.getName())
                .email(newUser.getEmail())
                .build();
    }

    private UserModel convertToUser(UserRequest request) {
        return UserModel.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .userId(UUID.randomUUID().toString())
                .build();
    }
}
