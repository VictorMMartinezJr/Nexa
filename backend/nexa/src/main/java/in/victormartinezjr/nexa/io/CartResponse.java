package in.victormartinezjr.nexa.io;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
public class CartResponse {
    private Long id;
    private String userEmail;
    private BigDecimal totalCartPrice;
    private List<CartItemResponse> items;
}
