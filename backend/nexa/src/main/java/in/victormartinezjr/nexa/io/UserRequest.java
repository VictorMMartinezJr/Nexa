package in.victormartinezjr.nexa.io;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserRequest {
    @NotBlank(message = "Please enter your name")
    private String name;

    @Email(message = "Please enter a valid email")
    @NotNull(message = "Please enter your email")
    private String email;

    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;
}
