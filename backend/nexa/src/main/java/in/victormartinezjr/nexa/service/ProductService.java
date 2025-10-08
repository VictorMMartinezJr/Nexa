package in.victormartinezjr.nexa.service;

import in.victormartinezjr.nexa.model.Product;
import in.victormartinezjr.nexa.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    public List<Product> getFilteredProducts(String sort, String audience, String category) {
        List<Product> products = productRepo.findAll();

        // Filter by (mens, womens, kids)
        if (audience != null && !audience.isBlank()) {
            products = products.stream().filter(product -> product.getAudience() != null && product.getAudience().equalsIgnoreCase(audience))
                    .collect(Collectors.toList());
        }

        // Filter by category (hoodies, bottoms, etc)
        if (category != null && !category.isBlank()) {
            products = products.stream()
                    .filter(product -> product.getCategory() != null && (product.getCategory().toLowerCase().contains(category.toLowerCase()) || product.getCategory().toLowerCase().contains(category.substring(0, category.length()-1).toLowerCase())))
                    .collect(Collectors.toList());
        }

        // Sort by price
        if ("lowToHigh".equals(sort)) {
            products.sort((a,b) -> a.getPrice().compareTo(b.getPrice()));
        } else if ("highToLow".equals(sort)) {
            products.sort((a,b) -> b.getPrice().compareTo(a.getPrice()));
        }

        return products;
    }

    public Product getProductById(Long id) {
        return productRepo.findById(id).orElse(null);
    }

    public List<Product> searchProducts(String keyword) {
        return productRepo.searchProducts(keyword);
    }
}
