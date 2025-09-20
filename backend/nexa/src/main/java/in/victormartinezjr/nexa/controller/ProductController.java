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

    // Get mappings
    @GetMapping("/products")
    public List<Product> getProducts(@RequestParam(required = false) String sort, @RequestParam(required = false) String audience, @RequestParam(required = false) String category) {
        return productService.getFilteredProducts(sort, audience, category);
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // Post mappings
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
}
