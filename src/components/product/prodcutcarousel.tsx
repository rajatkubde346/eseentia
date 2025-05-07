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

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex * (100 / visibleCount));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    
    // Calculate the new index based on scroll position
    const newIndex = Math.round(newScrollLeft / (100 / visibleCount));
    if (newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        className="relative overflow-hidden touch-pan-x"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out touch-pan-x"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            touchAction: 'pan-x'
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-shrink-0 px-2 select-none"
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <div 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer
                  ${activeProduct === product.id 
                    ? 'shadow-xl transform -translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:-translate-y-5 xl:-translate-y-6 hover:shadow-2xl' 
                    : 'hover:shadow-lg hover:-translate-y-1 sm:hover:-translate-y-2 md:hover:-translate-y-3 lg:hover:-translate-y-4 xl:hover:-translate-y-5'
                  }`}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-300
                      ${activeProduct === product.id 
                        ? 'brightness-105 sm:brightness-110 md:brightness-115 lg:brightness-120 xl:brightness-125' 
                        : 'hover:brightness-105'
                      }`}
                    draggable="false"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className={`text-sm font-medium mb-1 truncate transition-colors duration-300
                    ${activeProduct === product.id 
                      ? 'text-blue-600 sm:text-blue-700 md:text-blue-800 lg:text-blue-900 xl:text-blue-950' 
                      : 'text-gray-800 hover:text-blue-600'
                    }`}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold transition-colors duration-300
                      ${activeProduct === product.id 
                        ? 'text-blue-600 sm:text-blue-700 md:text-blue-800 lg:text-blue-900 xl:text-blue-950' 
                        : 'text-gray-900'
                      }`}
                    >
                      ${product.price.toFixed(2)}
                    </span>
                    {product.discount && (
                      <span className="text-sm text-gray-500 line-through">
                        ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
