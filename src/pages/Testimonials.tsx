import React from 'react';
import { Star, Quote, MapPin, Building } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AMEGT has been our trusted partner for rice imports for over 5 years. Their quality is consistently excellent, and their delivery is always on time. The team is professional and understands our market requirements perfectly.",
      author: "Ahmed Al-Rashid",
      position: "Managing Director",
      company: "Al-Rashid Trading LLC",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      rating: 5,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      quote: "The best sugar supplier in the region. AMEGT's commitment to quality and their competitive pricing has helped us grow our business significantly. We highly recommend their services to anyone in the food industry.",
      author: "Sarah Johnson",
      position: "Procurement Manager",
      company: "Global Food Distributors",
      country: "Kenya",
      flag: "🇰🇪",
      rating: 5,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      quote: "Working with AMEGT for our cooking oil requirements has been a game-changer. Their private labeling service is exceptional, and they helped us launch our own brand successfully in the market.",
      author: "Mohamed Hassan",
      position: "CEO",
      company: "Hassan Food Industries",
      country: "Egypt",
      flag: "🇪🇬",
      rating: 5,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      quote: "AMEGT's wheat quality is outstanding. As a flour mill operator, quality is crucial for us, and they have never disappointed. Their technical support and market insights are invaluable.",
      author: "James Ochieng",
      position: "Operations Director",
      company: "East Africa Mills",
      country: "Tanzania",
      flag: "🇹🇿",
      rating: 5,
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      quote: "Excellent service and premium quality products. AMEGT has been instrumental in helping us expand our retail chain across multiple locations. Their logistics support is remarkable.",
      author: "Fatima Al-Zahra",
      position: "Supply Chain Manager",
      company: "Middle East Retail Group",
      country: "Qatar",
      flag: "🇶🇦",
      rating: 5,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      quote: "The professionalism and reliability of AMEGT is unmatched. They understand the African market dynamics and provide solutions that work. We've been partners for over 8 years now.",
      author: "David Mwangi",
      position: "General Manager",
      company: "African Trade Solutions",
      country: "Uganda",
      flag: "🇺🇬",
      rating: 5,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const trustBadges = [
    {
      icon: <Star className="text-yellow-500" size={32} />,
      title: "20 Years of Excellence",
      description: "Two decades of consistent quality and service"
    },
    {
      icon: <Building className="text-green-600" size={32} />,
      title: "500+ Happy Clients",
      description: "Serving businesses across 20+ countries"
    },
    {
      icon: <MapPin className="text-blue-600" size={32} />,
      title: "Global Reach",
      description: "Trusted partner across Africa and Middle East"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients across Africa and the Middle East 
              have to say about their experience working with AMEGT Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {badge.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <div className="flex items-center mt-1">
                      <Building size={14} className="text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{testimonial.company}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-sm mr-2">{testimonial.flag}</span>
                      <span className="text-sm text-gray-600">{testimonial.country}</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-green-200" size={32} />
                  <p className="text-gray-700 italic pl-6">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Our commitment to quality and service excellence has earned us the trust of clients across multiple industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-green-100">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-green-100">Successful Shipments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-green-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the AMEGT difference. Contact us today to discuss your agro-commodity requirements 
            and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Your Partnership
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors">
              Request References
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;