import { useState } from 'react';
import product1 from '../../images/product/powder.png';
import product2 from '../../images/product/tablets.png';
import product3 from '../../images/product/alfalfa powder.png';
import product4 from  '../../images/product/capsules.png';
import product5 from  '../../images/product/barleys grass.png';
import product6 from  '../../images/product/Moringa.png';
import product7 from  '../../images/product/MoringaC.png';
import product8 from  '../../images/product/Moringa T.png';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
}

const products: Product[] = [
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
  
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 6 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 6 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors hidden md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors hidden md:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto md:overflow-x-hidden no-scrollbar">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-4/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-shrink-0 px-2"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 mb-1 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
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
