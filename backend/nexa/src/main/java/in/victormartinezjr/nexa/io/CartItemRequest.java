package in.victormartinezjr.nexa.io;

import lombok.Data;

@Data
public class CartItemRequest {
    private Long productId;
    private int quantity;
}
