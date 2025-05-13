import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import product1 from '../../images/product/powder.png';
import product2 from '../../images/product/tablets.png';
import product3 from '../../images/product/alfalfa powder.png';
import product4 from  '../../images/product/capsules.png';
import product5 from  '../../images/product/barleys grass.png';
import product6 from  '../../images/product/Moringa.png';
import product7 from  '../../images/product/MoringaC.png';
import product8 from  '../../images/product/MoringaT.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Spirulina Powder",
    price: 99.99,
    image: product1,
    discount: 20
  },
  {
    id: 2,
    name: "Spirulina Capsules",
    price: 199.99,
    image: product4,
    discount: 15
  },
  {
    id: 3,
    name: "Spirulina Tablets",
    price: 1299.99,
    image: product2,
    discount: 10
  },
  {
    id: 4,
    name: "Moringa Powder",
    price: 49.99,
    image: product6,
    discount: 25
  },
  {
    id: 5,
    name: "Moringa Capsules",
    price: 129.99,
    image: product7,
    discount: 5
  },
  {
    id: 6,
    name: "Moringa Tablets",
    price: 399.99,
    image: product8,
    discount: 12
  },
  {
    id: 7,
    name: "Barleys Grass Powder",
    price: 99.99,
    image: product5,
    discount: 20
  },
  {
    id: 8,
    name: "Alfalfa Leaves Powder",
    price: 199.99,
    image: product3,
    discount: 15
  },
  {
    id: 9,
    name: "Spirulina Tablets",
    price: 1299.99,
    image: product2,
    discount: 10
  },
  {
    id: 10,
    name: "Moringa Powder",
    price: 49.99,
    image: product6,
    discount: 25
  },
  {
    id: 11,
    name: "Moringa Capsules",
    price: 129.99,
    image: product7,
    discount: 5
  },
  {
    id: 12,
    name: "Moringa Tablets",
    price: 399.99,
    image: product8,
    discount: 12
  },
];

// Responsive breakpoints for number of visible items
const getVisibleCount = () => {
  if (window.innerWidth < 640) return 1; // mobile
  if (window.innerWidth < 768) return 2; // sm
  if (window.innerWidth < 1024) return 3; // md
  if (window.innerWidth < 1280) return 4; // lg
  return 6; // xl and up
};

// Quick View Modal Component
const QuickViewModal = ({ product, isOpen, onClose }: { product: Product | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {/* Product Image */}
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full sm:w-1/2">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      -{product.discount}%
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full sm:w-1/2">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-4">
                  {product.name}
                </h3>
                
                <div className="mt-4 space-y-4">
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.discount && (
                      <span className="text-lg text-gray-500 line-through">
                        ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="text-gray-600">
                    <p className="text-sm">
                      Experience the premium quality of our {product.name.toLowerCase()}. 
                      Made with the finest ingredients and packed with essential nutrients.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>100% Natural Ingredients</li>
                      <li>Premium Quality</li>
                      <li>Rich in Nutrients</li>
                      <li>Easy to Consume</li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                      onClick={() => {
                        // Add to cart logic here
                        onClose();
                      }}
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        // Buy now logic here
                        onClose();
                      }}
                      className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showQuickView, setShowQuickView] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [compareItems, setCompareItems] = useState<number[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = products.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const handleQuickView = (productId: number) => {
    setShowQuickView(productId);
  };

  const handleCloseQuickView = () => {
    setShowQuickView(null);
  };

  const handleAddToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
    // Here you can implement your cart logic
  };

  const handleCompare = (productId: number) => {
    setCompareItems(prev => [...prev, productId]);
    // Here you can implement your compare logic
  };

  return (
    <div className="relative w-full mx-auto px-2 sm:px-4 py-4 sm:py-8 bg-white">
      <div 
        ref={carouselRef}
        className="relative md:overflow-hidden overflow-x-auto scroll-smooth"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex flex-nowrap md:transition-transform md:duration-300 md:ease-in-out min-w-full"
          style={window.innerWidth >= 768 ? { transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` } : {}}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-shrink-0 px-1 sm:px-2 select-none"
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <div 
                className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl"
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                {/* Action Icons Container - Right Side */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-10">
                  <div className="flex flex-col space-y-2 bg-white shadow-lg rounded-l-lg p-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuickView(product.id);
                      }}
                      className="relative flex items-center justify-center p-2 hover:bg-purple-50 rounded-lg transition-all duration-200 group/btn"
                      title="Quick View"
                    >
                      <div className="absolute inset-0 bg-purple-100 rounded-lg scale-0 group-hover/btn:scale-100 transition-transform duration-200"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 group-hover/btn:text-purple-600 transition-colors duration-200 relative z-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Quick View
                      </span>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product.id);
                      }}
                      className="relative flex items-center justify-center p-2 hover:bg-green-50 rounded-lg transition-all duration-200 group/btn"
                      title="Add to Cart"
                    >
                      <div className="absolute inset-0 bg-green-100 rounded-lg scale-0 group-hover/btn:scale-100 transition-transform duration-200"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 group-hover/btn:text-green-600 transition-colors duration-200 relative z-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Add to Cart
                      </span>
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCompare(product.id);
                      }}
                      className="relative flex items-center justify-center p-2 hover:bg-blue-50 rounded-lg transition-all duration-200 group/btn"
                      title="Compare"
                    >
                      <div className="absolute inset-0 bg-blue-100 rounded-lg scale-0 group-hover/btn:scale-100 transition-transform duration-200"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 group-hover/btn:text-blue-600 transition-colors duration-200 relative z-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="absolute -right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        Compare
                      </span>
                    </button>
                  </div>
                </div>

                <div 
                  className="relative aspect-square cursor-pointer touch-manipulation select-none"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-300 group-hover:scale-105"
                    draggable="false"
                  />
                  {product.discount && (
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs sm:text-sm pointer-events-none">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                <div className="p-2 sm:p-4">
                  <h3 className="text-xs sm:text-sm font-medium mb-1 truncate text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.discount && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through">
                        ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {isHovering && window.innerWidth >= 768 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      
      {/* Quick View Modal */}
      <QuickViewModal
        product={products.find(p => p.id === showQuickView) || null}
        isOpen={showQuickView !== null}
        onClose={handleCloseQuickView}
      />
    </div>
  );
};

export default ProductCarousel;