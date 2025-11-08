import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Elegant Evening Dress",
    price: 289.99,
    image: product1,
    category: "Dresses",
  },
  {
    id: "2",
    name: "Classic White Blazer",
    price: 199.99,
    image: product2,
    category: "Blazers",
  },
  {
    id: "3",
    name: "Luxury Trench Coat",
    price: 349.99,
    image: product3,
    category: "Outerwear",
  },
  {
    id: "4",
    name: "Designer Tailored Pants",
    price: 159.99,
    image: product4,
    category: "Pants",
  },
  {
    id: "5",
    name: "Sophisticated Black Dress",
    price: 249.99,
    image: product1,
    category: "Dresses",
  },
  {
    id: "6",
    name: "Modern Blazer Set",
    price: 299.99,
    image: product2,
    category: "Sets",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of premium fashion pieces designed for the modern wardrobe
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {["All", "Dresses", "Blazers", "Outerwear", "Pants"].map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
