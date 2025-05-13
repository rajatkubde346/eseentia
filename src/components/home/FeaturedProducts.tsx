import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../product/ProductGrid';
import { products } from '../../data/products';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  // Filter for best sellers and new products
  const featuredProducts = products.filter(product => product.isBestSeller || product.isNew);
  
  return (
    <section className="py-16 bg-white">
      <div className="container-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Our most popular and newest spirulina products carefully selected for quality and potency.</p>
        </div>
        
        <ProductGrid products={featuredProducts} />
        
        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800"
          >
            View All Products
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;