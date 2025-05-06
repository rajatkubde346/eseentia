import React, { useEffect } from 'react';
import { Leaf, Droplets, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterSection from '../components/home/NewsletterSection';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us | Seven Hills Wholefoods';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4068395/pexels-photo-4068395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Spirulina farm" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-xl font-light opacity-90">
              From a small sustainable farm to a global provider of premium spirulina products, our journey is rooted in our passion for natural nutrition and environmental stewardship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-600 font-medium">Our Mission</span>
              <h2 className="text-3xl font-serif font-semibold mt-2 mb-6">Providing Sustainable Nutrition for a Healthier World</h2>
              <p className="text-neutral-700 mb-6">
                At Seven Hills Wholefoods, we're committed to providing the highest quality spirulina products while maintaining sustainable farming practices that respect our planet. Our mission is to help people achieve optimal health through nature's most nutrient-dense superfood.
              </p>
              <p className="text-neutral-700">
                We believe that health and nutrition should never come at the expense of our environment. That's why we've developed cultivation methods that minimize our ecological footprint while maximizing the nutritional profile of our spirulina.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3735155/pexels-photo-3735155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Spirulina farming" 
                className="rounded-lg shadow-lg object-cover h-80 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Our Values</span>
            <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">What Drives Us Every Day</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              Our core values shape everything we do, from how we grow our spirulina to how we interact with our customers and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Sustainability</h3>
              <p className="text-neutral-700">
                We're committed to environmentally responsible farming practices that preserve our planet for future generations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Quality</h3>
              <p className="text-neutral-700">
                We never compromise on the quality of our products, ensuring each batch meets our rigorous standards.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mb-4">
                <Droplets size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Purity</h3>
              <p className="text-neutral-700">
                We maintain the highest standards of purity, growing our spirulina in carefully controlled conditions away from contaminants.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">Community</h3>
              <p className="text-neutral-700">
                We support the communities where we farm, providing fair employment and investing in local initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Our Process</span>
            <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">How We Grow Our Spirulina</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              From cultivation to packaging, every step of our process is designed to maintain the nutritional integrity of our spirulina.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:translate-x-px"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <motion.div 
                  className="md:w-1/2 md:pr-12 text-right hidden md:block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Careful Cultivation</h3>
                  <p className="text-neutral-700">
                    We grow our spirulina in carefully controlled freshwater ponds, using pristine water and natural nutrients to create the optimal growing environment.
                  </p>
                </motion.div>
                
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white border-4 border-white shadow-md z-10 my-4 md:my-0">
                  1
                </div>
                
                <motion.div 
                  className="md:w-1/2 md:pl-12 md:hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Careful Cultivation</h3>
                  <p className="text-neutral-700">
                    We grow our spirulina in carefully controlled freshwater ponds, using pristine water and natural nutrients to create the optimal growing environment.
                  </p>
                </motion.div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <motion.div 
                  className="md:w-1/2 md:pr-12 text-right md:hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Gentle Harvesting</h3>
                  <p className="text-neutral-700">
                    Our spirulina is harvested using low-pressure filtration methods that preserve its delicate cellular structure and nutrient profile.
                  </p>
                </motion.div>
                
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white border-4 border-white shadow-md z-10 my-4 md:my-0">
                  2
                </div>
                
                <motion.div 
                  className="md:w-1/2 md:pl-12 hidden md:block"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Gentle Harvesting</h3>
                  <p className="text-neutral-700">
                    Our spirulina is harvested using low-pressure filtration methods that preserve its delicate cellular structure and nutrient profile.
                  </p>
                </motion.div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <motion.div 
                  className="md:w-1/2 md:pr-12 text-right hidden md:block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Low-Temperature Drying</h3>
                  <p className="text-neutral-700">
                    We use low-temperature drying techniques to preserve heat-sensitive nutrients while achieving optimal moisture content.
                  </p>
                </motion.div>
                
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white border-4 border-white shadow-md z-10 my-4 md:my-0">
                  3
                </div>
                
                <motion.div 
                  className="md:w-1/2 md:pl-12 md:hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Low-Temperature Drying</h3>
                  <p className="text-neutral-700">
                    We use low-temperature drying techniques to preserve heat-sensitive nutrients while achieving optimal moisture content.
                  </p>
                </motion.div>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <motion.div 
                  className="md:w-1/2 md:pr-12 text-right md:hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Rigorous Testing</h3>
                  <p className="text-neutral-700">
                    Every batch is tested for purity, potency, and contaminants before being packaged in our eco-friendly, light-protective containers.
                  </p>
                </motion.div>
                
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white border-4 border-white shadow-md z-10 my-4 md:my-0">
                  4
                </div>
                
                <motion.div 
                  className="md:w-1/2 md:pl-12 hidden md:block"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-serif font-semibold mb-2">Rigorous Testing</h3>
                  <p className="text-neutral-700">
                    Every batch is tested for purity, potency, and contaminants before being packaged in our eco-friendly, light-protective containers.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Our Team</span>
            <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">The People Behind Seven Hills</h2>
            <p className="max-w-2xl mx-auto text-neutral-700">
              Our passionate team combines expertise in nutrition, sustainable agriculture, and quality assurance to bring you the best spirulina products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <img 
                src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sarah Miller" 
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">Sarah Miller</h3>
                <p className="text-primary-600 mb-4">Founder & CEO</p>
                <p className="text-neutral-700">
                  With a background in nutritional science and sustainable agriculture, Sarah founded Seven Hills with a mission to bring the highest quality spirulina to market.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img 
                src="https://images.pexels.com/photos/8439997/pexels-photo-8439997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. James Chen" 
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">Dr. James Chen</h3>
                <p className="text-primary-600 mb-4">Chief Scientific Officer</p>
                <p className="text-neutral-700">
                  With a Ph.D. in Algal Biotechnology, James oversees our cultivation methods and ensures optimal nutritional profiles in all our products.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/8106190/pexels-photo-8106190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Maria Rodriguez" 
                className="w-full h-60 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">Maria Rodriguez</h3>
                <p className="text-primary-600 mb-4">Head of Sustainability</p>
                <p className="text-neutral-700">
                  Maria ensures our farming practices remain environmentally responsible and leads our initiatives to minimize our carbon footprint.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
};

export default AboutPage;