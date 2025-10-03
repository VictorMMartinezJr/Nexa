package in.victormartinezjr.nexa.service;

import in.victormartinezjr.nexa.io.CartItemRequest;
import in.victormartinezjr.nexa.io.CartResponse;

public interface CartService {
    CartResponse getCart(String email);

    CartResponse addToCart(String email, CartItemRequest request);

    CartResponse removeFromCart(String email, Long productId);

    CartResponse clearCart(String email);
}
