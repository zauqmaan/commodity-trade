import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Globe, 
  Award, 
  Shield, 
  Users,
  Truck,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const products = [
    {
      id: 'rice',
      name: 'Premium Rice',
      image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality basmati and jasmine rice varieties'
    },
    {
      id: 'sugar',
      name: 'Sugar',
      image: 'https://images.pexels.com/photos/4110221/pexels-photo-4110221.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Refined white sugar and raw sugar products'
    },
    {
      id: 'oil',
      name: 'Cooking Oil',
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium cooking oils and edible oils'
    },
    {
      id: 'wheat',
      name: 'Wheat',
      image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-grade wheat for various applications'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and international certifications'
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: 'Global Reach',
      description: 'Exporting to 20+ countries across Africa and Middle East'
    },
    {
      icon: <Award className="text-green-600" size={32} />,
      title: 'Private Labeling',
      description: 'Custom packaging and branding solutions'
    }
  ];

  const testimonials = [
    {
      quote: "AMEGT has been our trusted partner for rice imports for over 5 years. Their quality is consistently excellent.",
      author: "Ahmed Al-Rashid",
      company: "Al-Rashid Trading LLC",
      country: "UAE",
      rating: 5
    },
    {
      quote: "The best sugar supplier in the region. Always on time, always quality products.",
      author: "Sarah Johnson",
      company: "Global Food Distributors",
      country: "Kenya",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Cargo shipping and agriculture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <div className="mb-6">
                <span className="inline-block bg-green-600/20 backdrop-blur-sm text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-pulse">
                  20+ Years of Excellence in Trading
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Connecting Markets,
                <span className="block text-green-400">Delivering Quality</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                Africa & Middle East General Trading - Your trusted partner for premium agro-commodities including rice, sugar, cooking oil, and wheat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/products"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <span>View Products</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <span>Request Quote</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-3 mx-auto group-hover:bg-green-600/30 transition-colors duration-300">
                    <Globe className="text-green-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-3 mx-auto group-hover:bg-green-600/30 transition-colors duration-300">
                    <Award className="text-green-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-3 mx-auto group-hover:bg-green-600/30 transition-colors duration-300">
                    <Shield className="text-green-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-gray-300">Quality Assured</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Agricultural products and trading"
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About AMEGT Mini Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">About AMEGT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Leading Agro-Commodity Trader
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              With over two decades of experience, AMEGT Dubai has established itself as a trusted partner in the global agro-commodity trade, connecting markets across Africa and the Middle East.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group transition-colors duration-300"
            >
              Read More About Us
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Globe className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Export</h3>
              <p className="text-gray-600">Serving customers across 20+ countries with reliable supply chains</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">20+ Years Experience</h3>
              <p className="text-gray-600">Two decades of expertise in agro-commodity trading</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Products</h3>
              <p className="text-gray-600">All products meet international quality and safety standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Premium Agro-Commodities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in sourcing and trading high-quality agricultural products that meet international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-green-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center text-green-600 font-medium group">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Your Trusted Trading Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl hover:bg-gradient-to-br hover:from-white hover:to-green-50 hover:shadow-xl transition-all duration-500 group border border-gray-100 hover:border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events/News Slider */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Events & News</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Latest Updates
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-green-200">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gulfood Exhibition"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Gulfood 2024 Exhibition</h3>
                <p className="text-gray-600">Successfully participated in the largest food and beverage trade show in the Middle East.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-green-200">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="New Partnership"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">New Partnership Announcement</h3>
                <p className="text-gray-600">Expanding our reach with new strategic partnerships across East Africa.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-green-200">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality Certification"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">ISO Certification Renewed</h3>
                <p className="text-gray-600">Maintaining our commitment to quality with renewed international certifications.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group transition-colors duration-300"
            >
              View Gallery
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-green-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" size={20} style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic group-hover:text-gray-900 transition-colors duration-300">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-sm text-green-600">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group transition-colors duration-300"
            >
              View All Testimonials
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Get in touch with our team today to discuss your agro-commodity requirements and discover how we can serve your business.
          </p>
          <Link
            to="/contact"
            className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center space-x-2 group"
          >
            <span>Get In Touch Today</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;