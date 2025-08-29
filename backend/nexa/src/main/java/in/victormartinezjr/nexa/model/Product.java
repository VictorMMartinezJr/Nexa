package in.victormartinezjr.nexa.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private BigDecimal price;
    private String description;
    private String category;

    @ElementCollection
    private List<String> details;

    private boolean hasS;
    private boolean hasM;
    private boolean hasL;
    private boolean hasXL;
    private boolean hasXXL;
    private boolean hasXXXL;
}
