import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Camera } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-none hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button variant="luxury" size="sm" className="shadow-lg">
              <Camera className="h-4 w-4 mr-2" />
              Try On
            </Button>
            <Button variant="default" size="sm" className="shadow-lg">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Bag
            </Button>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-base mb-1 truncate">{name}</h3>
          <p className="text-lg font-semibold">${price.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
