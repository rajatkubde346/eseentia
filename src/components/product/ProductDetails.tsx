import { useParams, useNavigate } from 'react-router-dom';
import { products } from './prodcutcarousel';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                  -{product.discount}%
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.discount && (
                  <span className="text-xl text-gray-500 line-through">
                    ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <h2 className="text-xl font-semibold text-gray-900">Product Description</h2>
                <p className="text-gray-600">
                  Experience the natural benefits of our premium quality {product.name.toLowerCase()}. 
                  Made with the finest ingredients and processed with care to maintain maximum nutritional value.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 