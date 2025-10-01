package in.victormartinezjr.nexa.service;

import in.victormartinezjr.nexa.io.UserRequest;
import in.victormartinezjr.nexa.io.UserResponse;

public interface UserService {
    UserResponse createUser(UserRequest request);

    UserResponse getUserAccount(String email);
}
