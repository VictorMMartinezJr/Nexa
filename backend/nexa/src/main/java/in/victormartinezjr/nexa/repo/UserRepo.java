package in.victormartinezjr.nexa.repo;

import in.victormartinezjr.nexa.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByEmail(String email);

    Boolean existsByEmail(String email);
}
