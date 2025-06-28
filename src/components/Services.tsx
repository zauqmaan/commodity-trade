import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Settings, 
  Globe, 
  Shield,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="text-blue-600" size={32} />,
      title: "Business Consulting",
      description: "Strategic planning and business development solutions to optimize your operations and drive growth.",
      features: ["Strategic Planning", "Market Analysis", "Process Optimization", "Growth Strategies"]
    },
    {
      icon: <TrendingUp className="text-blue-600" size={32} />,
      title: "Financial Advisory",
      description: "Comprehensive financial planning and investment advisory services for sustainable business growth.",
      features: ["Financial Planning", "Investment Advisory", "Risk Management", "Performance Analysis"]
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      title: "HR Solutions",
      description: "Complete human resources solutions including talent acquisition, development, and management.",
      features: ["Talent Acquisition", "HR Management", "Training Programs", "Performance Reviews"]
    },
    {
      icon: <Settings className="text-blue-600" size={32} />,
      title: "Technology Integration",
      description: "Digital transformation services to modernize your business operations and enhance efficiency.",
      features: ["Digital Strategy", "System Integration", "Automation", "Tech Consulting"]
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: "Market Expansion",
      description: "International market entry strategies and local market expertise for successful expansion.",
      features: ["Market Research", "Entry Strategies", "Local Partnerships", "Regulatory Compliance"]
    },
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your business interests.",
      features: ["Risk Assessment", "Compliance", "Insurance Advisory", "Crisis Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of business services designed to help your company thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 hover:bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;