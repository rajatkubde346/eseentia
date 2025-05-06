import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';
import { ShoppingBag, ChevronRight, Truck, Shield, ArrowLeft, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/product/ProductGrid';
import { motion } from 'framer-motion';
import { Product } from '../types/Product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(id ? getProductById(Number(id)) : undefined);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  // Update product when ID changes
  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(Number(id));
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        // Reset selected size to first size when product changes
        setSelectedSize(fetchedProduct.sizes?.[0]?.size);
        // Reset quantity
        setQuantity(1);
        // Reset selected image
        setSelectedImage(0);
        // Get related products
        setRelatedProducts(getRelatedProducts(fetchedProduct, 3));
        // Update page title
        document.title = `${fetchedProduct.name} | Seven Hills Wholefoods`;
      } else {
        navigate('/products');
      }
    }
  }, [id, navigate]);
  
  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return <div className="container py-32 text-center">Loading product...</div>;
  }
  
  // Find price for selected size or use default price
  const currentPrice = selectedSize 
    ? product.sizes?.find(s => s.size === selectedSize)?.price || product.price
    : product.price;
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      price: currentPrice
    });
  };
  
  return (
    <div className="py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-sm">
          <button onClick={() => navigate('/products')} className="text-neutral-500 hover:text-primary-600 flex items-center">
            <ArrowLeft size={14} className="mr-1" />
            Back to Products
          </button>
          <ChevronRight size={14} className="mx-2 text-neutral-400" />
          <span className="text-neutral-800">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4 aspect-square">
              <motion.img 
                key={selectedImage}
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover object-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary-600' : 'border-transparent'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {product.isNew && <span className="tag bg-secondary-600 text-white">New</span>}
              {product.isBestSeller && <span className="tag bg-accent-600 text-white">Best Seller</span>}
              {product.isOrganic && <span className="tag bg-primary-600 text-white">Organic</span>}
            </div>
            
            <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18}
                    className={`${i < Math.floor(product.rating) ? 'fill-accent-500' : 'text-neutral-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-neutral-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.compareAtPrice && (
                <span className="text-neutral-500 line-through mr-2">${product.compareAtPrice.toFixed(2)}</span>
              )}
              <span className="text-2xl font-semibold text-neutral-900">${currentPrice.toFixed(2)}</span>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-neutral-700">{product.description}</p>
            </div>
            
            {/* Size Selection if available */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-neutral-900 mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size.size)}
                      className={`px-4 py-2 rounded border font-medium text-sm ${
                        selectedSize === size.size
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-white text-neutral-800 border-neutral-300 hover:border-primary-600'
                      }`}
                    >
                      {size.size} - ${size.price.toFixed(2)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-neutral-900 mb-3">Quantity</h3>
              <div className="flex items-center w-32 h-10 border border-neutral-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center text-neutral-600 hover:text-primary-600"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <div className="flex-1 h-full flex items-center justify-center border-x border-neutral-300">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-full flex items-center justify-center text-neutral-600 hover:text-primary-600"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full btn btn-primary flex items-center justify-center"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
            </div>
            
            {/* Shipping & Returns */}
            <div className="border-t border-neutral-200 pt-6 mb-6">
              <div className="flex mb-4">
                <Truck size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Free Shipping</h3>
                  <p className="text-sm text-neutral-600">Orders over $50 qualify for free shipping.</p>
                </div>
              </div>
              <div className="flex">
                <Shield size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Satisfaction Guarantee</h3>
                  <p className="text-sm text-neutral-600">30-day money back guarantee if you're not satisfied.</p>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="border-t border-neutral-200 pt-6">
              <h3 className="font-medium text-lg mb-4">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-neutral-200">
            <div className="flex overflow-x-auto">
              <button className="px-6 py-4 font-medium text-primary-600 border-b-2 border-primary-600">
                Product Details
              </button>
              <button className="px-6 py-4 font-medium text-neutral-500 hover:text-neutral-800">
                Nutritional Information
              </button>
              <button className="px-6 py-4 font-medium text-neutral-500 hover:text-neutral-800">
                Reviews
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Description</h3>
                <p className="text-neutral-700 mb-6">{product.description}</p>
                
                <h3 className="font-medium text-lg mb-4">Ingredients</h3>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700 mb-6">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Nutritional Information</h3>
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Nutrient
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          % Daily Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {product.nutritionalInfo && Object.entries(product.nutritionalInfo).map(([nutrient, info], index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                            {nutrient}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                            {info.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                            {info.dailyValue || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <ProductGrid
              products={relatedProducts}
              title="You May Also Like"
              subtitle="Based on your current selection, we think you'll like these products too."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;