package in.victormartinezjr.nexa.controller;

import in.victormartinezjr.nexa.io.CartItemRequest;
import in.victormartinezjr.nexa.io.CartResponse;
import in.victormartinezjr.nexa.model.Cart;
import in.victormartinezjr.nexa.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("api/cart")
@RequiredArgsConstructor
public class CartController {
    private final CartService cartService;

    @GetMapping()
    public CartResponse getCart(Principal principal) {
        return cartService.getCart(principal.getName());
    }


    @PostMapping("/add")
    public CartResponse addToCart(Principal principal, @RequestBody CartItemRequest request) {
        return cartService.addToCart(principal.getName(), request);
    }

    @DeleteMapping("/remove/{productId}")
    public CartResponse removeFromCart(Principal principal, @PathVariable Long productId) {
        return cartService.removeFromCart(principal.getName(), productId);
    }

    @DeleteMapping("/clear")
    public CartResponse clearCart(Principal principal) {
        return cartService.clearCart(principal.getName());
    }
}
