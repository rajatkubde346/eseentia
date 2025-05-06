import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/Product';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, subtitle }) => {
  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && <h2 className="text-3xl font-serif font-semibold text-neutral-900 mb-2">{title}</h2>}
          {subtitle && <p className="text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">No products found</h3>
          <p className="text-neutral-600">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;