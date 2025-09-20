package in.victormartinezjr.nexa.controller;

import in.victormartinezjr.nexa.model.Product;
import in.victormartinezjr.nexa.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String greet() {
        return "Greetings from Spring Boot!";
    }

    @GetMapping("/products")
    public List<Product> getProducts(@RequestParam(required = false) String sort, @RequestParam(required = false) String audience, @RequestParam(required = false) String category) {
        return productService.getFilteredProducts(sort, audience, category);
    }

    // Post Mappings
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
}
