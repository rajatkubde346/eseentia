import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  
  return (
    <motion.div 
      className="product-card group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="product-image"
          />
          
          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="tag bg-secondary-600 text-white">New</span>
            )}
            {product.isBestSeller && (
              <span className="tag bg-accent-600 text-white">Best Seller</span>
            )}
            {product.isOrganic && (
              <span className="tag bg-primary-600 text-white">Organic</span>
            )}
          </div>
          
          {/* Quick Add Button */}
          <div className="absolute bottom-3 right-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <button
              onClick={handleAddToCart}
              className="bg-white text-primary-800 p-2 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {/* Title and Price */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-neutral-800">{product.name}</h3>
            <div className="flex flex-col items-end">
              {product.compareAtPrice && (
                <span className="text-sm text-neutral-400 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
              <span className="font-medium text-neutral-900">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
          
          {/* Category */}
          <p className="text-sm text-neutral-500 mb-2">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
          
          {/* Rating */}
          <div className="flex items-center">
            <div className="flex text-accent-400">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent-500' : 'text-neutral-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-xs text-neutral-500">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;