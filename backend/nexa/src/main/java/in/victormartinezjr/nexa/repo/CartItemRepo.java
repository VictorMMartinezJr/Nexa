package in.victormartinezjr.nexa.repo;

import in.victormartinezjr.nexa.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepo extends JpaRepository<CartItem,Long> {
}
