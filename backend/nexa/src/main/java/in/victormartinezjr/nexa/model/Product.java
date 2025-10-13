package in.victormartinezjr.nexa.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

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
    private String genericCategory;
    private String audience;
    private String imageURL;

    private boolean hasS;
    private boolean hasM;
    private boolean hasL;
    private boolean hasXL;
    private boolean hasXXL;
    private boolean has6;
    private boolean has7;
    private boolean has8;
    private boolean has9;
    private boolean has10;
    private boolean has11;
    private boolean has12;
}
