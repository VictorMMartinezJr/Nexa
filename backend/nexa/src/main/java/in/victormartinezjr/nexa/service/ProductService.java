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

    public List<Product> getFilteredProducts(String sort, String audience, String category, List<String> selectedSizes) {
        List<Product> products = productRepo.findAll();

        // Filter by (mens, womens, kids)
        if (audience != null && !audience.isBlank()) {
            products = products.stream().filter(product -> product.getAudience() != null && product.getAudience().equalsIgnoreCase(audience))
                    .collect(Collectors.toList());
        }

        // Filter by category (hoodies, bottoms, etc)
        if (category != null && !category.isBlank()) {
                products = products.stream()
                        .filter(product -> product.getGenericCategory() != null && (product.getGenericCategory().toLowerCase().contains(category.toLowerCase())
                        ))
                        .collect(Collectors.toList());
        }



        // Sort by price
        if ("lowToHigh".equals(sort)) {
            products.sort((a,b) -> a.getPrice().compareTo(b.getPrice()));
        } else if ("highToLow".equals(sort)) {
            products.sort((a,b) -> b.getPrice().compareTo(a.getPrice()));
        }

        // Sort by size
        if (selectedSizes != null && !selectedSizes.isEmpty()) {
            products = products.stream()
                    .filter(product -> selectedSizes.stream().anyMatch(size -> {
                        return switch (size) {
                            case "S" -> product.isHasS();
                            case "M" -> product.isHasM();
                            case "L" -> product.isHasL();
                            case "XL" -> product.isHasXL();
                            case "XXL" -> product.isHasXXL();
                            case "6"  -> product.isHas6();
                            case "7"  -> product.isHas7();
                            case "8" -> product.isHas8();
                            case "9" -> product.isHas9();
                            case "10" -> product.isHas10();
                            case "11" -> product.isHas11();
                            case "12" -> product.isHas12();
                            default -> false;
                        };
                    }))
                    .collect(Collectors.toList());
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
