import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Truck } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'rice',
      name: 'Premium Rice',
      image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality basmati and jasmine rice varieties sourced from the finest farms',
      varieties: ['Basmati Rice', 'Jasmine Rice', 'Long Grain Rice', 'Parboiled Rice'],
      features: ['Premium Quality', 'Multiple Varieties', 'Custom Packaging', 'Bulk Orders']
    },
    {
      id: 'sugar',
      name: 'Sugar',
      image: 'https://images.pexels.com/photos/4110221/pexels-photo-4110221.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Refined white sugar and raw sugar products meeting international standards',
      varieties: ['Refined White Sugar', 'Raw Sugar', 'Brown Sugar', 'Caster Sugar'],
      features: ['Food Grade', 'Various Grades', 'Bulk Supply', 'Quality Assured']
    },
    {
      id: 'oil',
      name: 'Cooking Oil',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium cooking oils and edible oils for various culinary applications',
      varieties: ['Sunflower Oil', 'Palm Oil', 'Soybean Oil', 'Canola Oil'],
      features: ['Pure & Natural', 'Multiple Types', 'Food Grade', 'Private Labeling']
    },
    {
      id: 'wheat',
      name: 'Wheat',
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-grade wheat for flour production and various industrial applications',
      varieties: ['Hard Wheat', 'Soft Wheat', 'Durum Wheat', 'Feed Wheat'],
      features: ['High Protein', 'Various Grades', 'Bulk Supply', 'Quality Testing']
    },
    {
      id: 'private-label',
      name: 'Private Label Products',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom packaging and branding solutions for all our agro-commodity products',
      varieties: ['Custom Branding', 'Various Packaging', 'Logo Design', 'Market-Specific'],
      features: ['Custom Design', 'Brand Development', 'Market Research', 'Full Service']
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: 'Quality Assurance',
      description: 'All products undergo rigorous quality control and testing'
    },
    {
      icon: <Award className="text-green-600" size={24} />,
      title: 'International Standards',
      description: 'Certified products meeting global food safety requirements'
    },
    {
      icon: <Truck className="text-green-600" size={24} />,
      title: 'Reliable Delivery',
      description: 'Timely delivery with complete supply chain transparency'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Our Key Agro-Commodities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in sourcing and trading premium agro-commodities that meet the highest international 
              standards. Our product range includes rice, sugar, cooking oil, wheat, and custom private label solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-green-200">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Varieties</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.varieties.map((variety, varIndex) => (
                          <div key={varIndex} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 group-hover:bg-green-700 transition-colors duration-300"></div>
                            {variety}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, featIndex) => (
                          <span key={featIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors duration-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group transition-colors duration-300"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            We offer tailored solutions including private labeling, custom packaging, and specialized product sourcing 
            to meet your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2 group"
            >
              <span>Request Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 group"
            >
              <span>Product Inquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;