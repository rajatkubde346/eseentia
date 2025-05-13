import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/Product';

interface ProductGridProps {
  products: Product[];
  viewMode?: 'grid' | 'list';
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode = 'grid' }) => {
  return (
    <div>
      <div className="relative">
        {viewMode === 'grid' ? (
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-4 px-4 sm:px-6 min-w-max">
              {products.map((product) => (
                <div key={product.id} className="w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 px-4 sm:px-6">
            {products.map((product) => (
              <div key={product.id} className="flex bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-1/3 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-secondary-600 text-white text-xs px-2 py-1 rounded-sm">
                      New
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="absolute top-2 left-2 bg-accent-600 text-white text-xs px-2 py-1 rounded-sm">
                      Best Seller
                    </span>
                  )}
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12 sm:py-16 px-4 sm:px-6">
          <h3 className="text-base sm:text-lg font-medium text-neutral-900 mb-2">No products found</h3>
          <p className="text-sm sm:text-base text-neutral-600">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;