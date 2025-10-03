package in.victormartinezjr.nexa.service;

import in.victormartinezjr.nexa.io.CartItemRequest;
import in.victormartinezjr.nexa.io.CartItemResponse;
import in.victormartinezjr.nexa.io.CartResponse;
import in.victormartinezjr.nexa.model.Cart;
import in.victormartinezjr.nexa.model.CartItem;
import in.victormartinezjr.nexa.model.Product;
import in.victormartinezjr.nexa.model.UserModel;
import in.victormartinezjr.nexa.repo.CartRepo;
import in.victormartinezjr.nexa.repo.ProductRepo;
import in.victormartinezjr.nexa.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {
    private final UserRepo userRepo;
    private final CartRepo cartRepo;
    private final ProductRepo productRepo;

    private Cart getOrCreateCart(UserModel user) {
        return cartRepo.findByUser(user).orElseGet(() -> cartRepo.save(Cart.builder().user(user).build()));
    }

    private CartResponse convertToCartResponse(Cart cart) {
        List<CartItemResponse> items = cart.getItems().stream()
                .map(item -> CartItemResponse.builder()
                        .id(item.getId())
                        .productId(item.getProduct().getId())
                        .productName(item.getProduct().getName())
                        .productPrice(item.getProduct().getPrice())
                        .quantity(item.getQuantity())
                        .build())
                .toList();

        return CartResponse.builder()
                .id(cart.getId())
                .userEmail(cart.getUser().getEmail())
                .totalCartPrice(cart.getTotalCartPrice())
                .items(items)
                .build();
    }

    public CartResponse getCart(String email) {
        UserModel user = userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Cart cart = getOrCreateCart(user);
        return convertToCartResponse(cart);
    }

    @Override
    public CartResponse addToCart(String email, CartItemRequest request) {
        UserModel user = userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Cart cart = getOrCreateCart(user);

        Product productToAdd = productRepo.findById(request.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Check if item already in cart
        CartItem existingItem = cart.getItems().stream().filter(i -> i.getProduct().getPrice().equals(productToAdd.getPrice())).findFirst().orElse(null);

        if (existingItem != null) {
            existingItem.setQuantity(existingItem.getQuantity() + request.getQuantity());
        } else {
            CartItem newItem = CartItem.builder()
                    .cart(cart)
                    .product(productToAdd)
                    .quantity(request.getQuantity())
                    .build();
            cart.getItems().add(newItem);
        }

        cart.updateTotalCartPrice();
        cartRepo.save(cart);

        return convertToCartResponse(cart);
    }

    @Override
    public CartResponse removeFromCart(String email, Long productId) {
        UserModel user = userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Cart cart = getOrCreateCart(user);


        cart.getItems().removeIf(item -> item.getProduct().getId().equals(productId));
        cart.updateTotalCartPrice();
        cartRepo.save(cart);

        return convertToCartResponse(cart);
    }

    @Override
    public CartResponse clearCart(String email) {
        UserModel user = userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Cart cart = getOrCreateCart(user);

        cart.getItems().clear();
        cart.updateTotalCartPrice();
        cartRepo.save(cart);

        return convertToCartResponse(cart);
    }
}
