package in.victormartinezjr.nexa.repo;

import in.victormartinezjr.nexa.model.Cart;
import in.victormartinezjr.nexa.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepo extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUser(UserModel user);
}

